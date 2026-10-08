interface AuthenticationService {
    isPasswordMatch: (hashPassword: string, rawPassword: string) => boolean
}

export const authenticationService: AuthenticationService = {
    isPasswordMatch(hashPassword: string, rawPassword: string): boolean {
        return hashPassword === rawPassword;
    }
}

export const authenticationController = {
    login(hashPassword: string, rawPassword: string): string {
        const isPasswordMatched: boolean = authenticationService.isPasswordMatch(hashPassword, rawPassword)
        if (isPasswordMatched) return 'Login success'
        return 'Invalid credentials'
    }
}