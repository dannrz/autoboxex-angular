import { Service, inject } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { LoginRequest, LoginResponse } from '../interfaces/login.interface';
import { environment } from '@env/environment';
import { SKIP_API_PREFIX } from "@core/interceptors/api.interceptor"

@Service()
export class AuthService {
    private readonly http: HttpClient = inject(HttpClient);

    public sanctum(): Observable<void> {
        return this.http.get<void>(environment.sanctum, {
            context: new HttpContext().set(SKIP_API_PREFIX, true),
            withCredentials: true
        });
    }

    public login(credentials: LoginRequest): Observable<LoginResponse> {
        return this.sanctum().pipe(
            switchMap(() => this.http.post<LoginResponse>('/auth/login', credentials))
        );
    }
}