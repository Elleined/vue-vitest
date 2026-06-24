interface AuthenticationService {
    isPasswordMatch: (hashPassword: string, rawPassword: string) => boolean
}

export const authenticationService: AuthenticationService = {
    isPasswordMatch(hashPassword: string, rawPassword: string): boolean {
        return hashPassword === rawPassword;
    }
}

/**
 * @example
 * 1. Call the controller's `verify` method within your test block.
 * 2. Use `vi.spyOn` to stub the underlying `authenticationService.isPasswordMatch` method.
 * 3. Force the stub to return `true` or `false` to control whether the controller hits the success or failure path.
 * 4. Add method assertions on `authenticationService.isPasswordMatch` to verify that it was called with the correct parameters and properly executed as a mock.
 */
export const authenticationController = {
    verify(hashPassword: string, rawPassword: string): void {
        const isPasswordMatched: boolean = authenticationService.isPasswordMatch(hashPassword, rawPassword)
        if (isPasswordMatched) {
            console.log('Login success')
            return
        }
        console.log('Invalid credentials')
    }
}