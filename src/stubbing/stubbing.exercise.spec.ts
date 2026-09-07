import {describe, expect, test, vi, beforeEach} from "vitest";
import {authenticationController, authenticationService} from "@/stubbing/stubbing.exercise.ts";

describe('stubbing.exercise.ts unit test', () => {
    beforeEach(() => {
        // Resets spy call counts and clears mocked implementations between tests
        vi.restoreAllMocks();
    });

    test('Should return Invalid credentials', () => {
        // Dummy values
        // Expected values

        // Argument values to call the real method
        const isPasswordMatch: boolean = false

        // Spies or mocks
        const serviceFn = vi.spyOn(authenticationService, 'isPasswordMatch').mockReturnValueOnce(isPasswordMatch)

        // Real method call (actual value)
        const response: string = authenticationController.verify(expect.any(String), expect.any(String))

        // Return type and data type assertions or expectation
        expect(response).toBe('Invalid credentials')

        // Spies and mocks return type assertions and method call verifications
        expect(serviceFn).toHaveReturnedWith(isPasswordMatch)
        expect(serviceFn).toHaveBeenCalledOnce()
    })

    test('Should return Login success', () => {
        // Dummy values
        // Expected values

        // Argument values to call the real method
        const isPasswordMatch: boolean = true

        // Spies or mocks
        const serviceFn = vi.spyOn(authenticationService, 'isPasswordMatch').mockReturnValueOnce(isPasswordMatch)

        // Real method call (actual value)
        const response: string = authenticationController.verify(expect.any(String), expect.any(String))

        // Return type and data type assertions or expectation
        expect(response).toBe('Login success')

        // Spies and mocks return type assertions and method call verifications
        expect(serviceFn).toHaveReturnedWith(isPasswordMatch)
        expect(serviceFn).toHaveBeenCalledOnce()
    })
})