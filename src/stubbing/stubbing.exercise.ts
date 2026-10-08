interface AuthenticationService {
    isPasswordMatch: (hashPassword: string, rawPassword: string) => boolean
}

export const authenticationService: AuthenticationService = {
    isPasswordMatch(hashPassword: string, rawPassword: string): boolean {
        return hashPassword === rawPassword;
    }
}

export const authenticationController = {
    login(hashPassword: string, rawPassword: string): void {
        const isPasswordMatched: boolean = authenticationService.isPasswordMatch(hashPassword, rawPassword)
        if (isPasswordMatched) {
            console.log('Login success')
            return
        }
        console.log('Invalid credentials')
    }
}