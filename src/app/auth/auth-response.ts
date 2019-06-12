export interface AuthResponse {
    user: {
        id: string,
        email: string,
        access_token: string,
        expires_in: number
    }
}