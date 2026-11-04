export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    user: User;
    access_token: string;
    token_type: 'Bearer';
    expires_at: string;
}

export interface User {
    name: string;
    role: Role;
    status: string;
    username: string;
}

export interface Role {
    description: string;
    role_name: string;
}