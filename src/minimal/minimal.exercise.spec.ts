import { describe, expect, test } from "vitest";
import { getGrade, type Grade } from "@/minimal/minimal.exercise.ts";

// Try to use describe and test here to group the unit test cases
describe.concurrent('minimal.exercise.ts unit test', () => {
    describe('Happy paths', () => {
        test('90+ should return A', () => {
            const grade: Grade = getGrade(90)
            expect(grade).toBe('A')
        })

        test('80+ should return B', () => {
            const grade: Grade = getGrade(80)
            expect(grade).toBe('B')
        })

        test('70+ should return C', () => {
            const grade: Grade = getGrade(70)
            expect(grade).toBe('C')
        })

        test('60+ should return D', () => {
            const grade: Grade = getGrade(60)
            expect(grade).toBe('D')
        })

        test('50+ should return F', () => {
            const grade: Grade = getGrade(50)
            expect(grade).toBe('F')
        })
    })

    describe('Parameterized tests', () => {
        test.each([90, 91, 92, 93, 94, 95, 96, 97, 98, 99])('%d should return A', (num: number) => {
            const grade: Grade = getGrade(num)
            expect(grade).toBe('A')
        })

        test.each([80, 81, 82, 83, 84, 85, 86, 87, 88, 89])('%d should return B', (num: number) => {
            const grade: Grade = getGrade(num)
            expect(grade).toBe('B')
        })

        test.each([70, 71, 72, 73, 74, 75, 76, 77, 78, 79])('%d should return C', (num: number) => {
            const grade: Grade = getGrade(num)
            expect(grade).toBe('C')
        })

        test.each([60, 61, 62, 63, 64, 65, 66, 67, 68, 69])('%d should return D', (num: number) => {
            const grade: Grade = getGrade(num)
            expect(grade).toBe('D')
        })

        test.each([50, 51, 52, 53, 54, 55, 56, 57, 58, 59])('%d should return F', (num: number) => {
            const grade: Grade = getGrade(num)
            expect(grade).toBe('F')
        })
    })

    describe('Error path testing', () => {
        test.each([-1, 101])('Should throw an error if score: %d', (score: number) => {
            expect(() => getGrade(score)).toThrow('Score must be between 0 and 100')
        })
    })

    describe('Edge case testing', () => {
        test('0 should return F', () => {
            const grade: Grade = getGrade(0)
            expect(grade).toBe('F')
        })

        test('100 should return A', () => {
            const grade: Grade = getGrade(100)
            expect(grade).toBe('A')
        })
    })
})