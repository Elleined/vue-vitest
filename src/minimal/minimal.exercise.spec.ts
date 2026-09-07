import {describe, expect, test} from "vitest";
import {getGrade, type Grade} from "@/minimal/minimal.exercise.ts";

// Try to use describe and test here to group the unit test cases

describe('minimal.exercise.ts unit test', () => {
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

    describe('Parameterized test and Error path testing', () => {
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