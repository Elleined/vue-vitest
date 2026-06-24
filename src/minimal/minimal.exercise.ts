export type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

/**
 * Calculates a letter grade based on a numeric score ranging from 0 to 100.
 * * @param score - The numeric mark to evaluate (must be between 0 and 100).
 * * @returns The corresponding {@link Grade} based on the following score tiers:
 * - `90 - 100`: 'A'
 * - `80 - 89`: 'B'
 * - `70 - 79`: 'C'
 * - `60 - 69`: 'D'
 * - `0 - 59`: 'F'
 * * @throws {Error} If the provided score is less than 0 or greater than 100.
 * * @example
 * ```typescript
 * const standardGrade = getGrade(85); // Returns 'B'
 * const boundaryGrade = getGrade(90); // Returns 'A'
 * ```
 */
export const getGrade = (score: number): Grade => {
    if (score < 0 || score > 100) throw new Error('Score must be between 0 and 100')

    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';

    return 'F';
};