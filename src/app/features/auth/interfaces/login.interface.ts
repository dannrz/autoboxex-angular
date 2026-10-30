export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    user: unknown; // reemplázalo por tu interfaz User
    access_token: string;
    token_type: 'Bearer';
    expires_at: string;
}