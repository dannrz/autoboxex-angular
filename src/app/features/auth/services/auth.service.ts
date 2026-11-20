import { Service, Signal, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';
import { LoginRequest, LoginResponse } from '../interfaces/login.interface';
import { environment } from '@env/environment';
import { SKIP_API_PREFIX } from "@core/interceptors/api.interceptor"

@Service()
export class AuthService {
    private readonly http: HttpClient = inject(HttpClient);

    private readonly token = signal<string | null>(sessionStorage.getItem('access_token'));
    private readonly expiresAt = signal<string | null>(sessionStorage.getItem('expires_at'));

    public readonly isAuthenticated: Signal<boolean> = computed(() => {
        const token = this.token();
        const expiresAt = this.expiresAt();

        if (!token || !expiresAt) return false;

        const expiration = new Date(expiresAt).getTime();
        return !Number.isNaN(expiration) && expiration > Date.now();
    });

    public getToken(): string | null {
        return this.token();
    }

    public sanctum(): Observable<void> {
        return this.http.get<void>(environment.sanctum, {
            context: new HttpContext().set(SKIP_API_PREFIX, true),
            withCredentials: true
        });
    }

    public login(credentials: LoginRequest): Observable<LoginResponse> {
        return this.sanctum().pipe(
            switchMap(() => this.http.post<LoginResponse>('/auth/login', credentials)),
            tap(data => this.saveSession(data))
        );
    }

    private saveSession(data: LoginResponse): void {
        sessionStorage.setItem('access_token', data.access_token);
        sessionStorage.setItem('expires_at', data.expires_at);
        sessionStorage.setItem('user', JSON.stringify(data.user));
        this.token.set(data.access_token);
        this.expiresAt.set(data.expires_at);
    }

    public logout(): void {
        sessionStorage.clear();

        this.token.set(null);
        this.expiresAt.set(null);
    }
}