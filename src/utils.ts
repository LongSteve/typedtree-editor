﻿/**
 * Check if given object is an array
 * @param obj Object to check.
 * @returns True if the obj is an array otherwise false.
 */
export function isArray(obj: any): boolean {
    // Wrapper to get a 'boolean' typed result.
    return Array.isArray(obj);
}

/**
 * Find a element in the given array that matches the predicate
 * @param array Array to check
 * @param predicate Predicate to match against elements
 * @returns Element that matches given predicate or undefined if none matches.
 */
export function find<T>(array: ReadonlyArray<T>, predicate: (elem: T) => boolean): T | undefined {
    /* Can be used instead of the library Array.find as that doesn't work on ie11 */
    for (let index = 0; index < array.length; index++) {
        if (predicate(array[index]))
            return array[index];
    }
    return undefined;
}

/**
 * Create a promise that waits for the given time.
 * @param milliseconds Time to wait.
 * @returns Promise that resolves after set time.
 */
export function sleep(milliseconds: number): Promise<{}> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

/**
 * Pretty format the given json.
 * @param json Json to format.
 * @returns Formatted json.
 */
export function formatJson(json: string): string {
    const parsedJson = JSON.parse(json);
    return JSON.stringify(parsedJson, undefined, 2);
}

/**
 * Check if the given array contains duplicate elements.
 * @param input Array to check for duplicates.
 * @returns True if array contains duplicates, otherwise false.
 */
export function hasDuplicates<T>(input: ReadonlyArray<T>): boolean {
    let hasDuplicates = false;
    input.forEach((value, index) => {
        hasDuplicates = hasDuplicates || input.indexOf(value) != index;
    });
    return hasDuplicates;
}

/**
 * Find all duplicated elements in the given array.
 * @param input Array to find duplicates in.
 * @returns Array containing all the duplicate elements
 */
export function findDuplicates<T>(input: ReadonlyArray<T>): T[] {
    return input.reduce((previousValue, currentValue, currentIndex) => {
        if (input.indexOf(currentValue) != currentIndex && previousValue.indexOf(currentValue) < 0)
            previousValue.push(currentValue);
        return previousValue;
    }, new Array<T>());
}

/**
 * Linearly interpolate between the given values.
 * @param a Number to start interpolating from.
 * @param b Number to interpolate to.
 * @param t Progress between a and b (0 = a, 1 = b).
 * @returns Interpolated value.
 */
export function lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
}

/**
 * Clamp the given value between min and max.
 * @param num Number to clamp
 * @param min Minimum value to clamp to.
 * @param max Maximum number to clamp to.
 * @returns Number clamped between min and max.
 */
export function clamp(num: number, min: number, max: number): number {
    return num < min ? min : (num > max ? max : num);
}

/**
 * Half the given number (Useful to use in higher order functions).
 * @param num Number to half.
 * @returns Half of the given number.
 */
export function half(num: number): number {
    return num * .5;
}

/**
 * Add the given numbers together (Useful to use in higher order functions).
 * @param a Number to add to b.
 * @param b Number to add to a.
 * @returns Result of adding a and b.
 */
export function add(a: number, b: number): number {
    return a + b;
}

/**
 * Subtract the given numbers (Useful to use in higher order functions).
 * @param a Number to add to b.
 * @param b Number to add to a.
 * @returns Result of subtracting a and b.
 */
export function subtract(a: number, b: number): number {
    return a - b;
}

/**
 * Assert that function is never called, useful for exhaustion checks.
 * @param x Parameter that should not be passed.
 * @returns Never
 */
export function assertNever(x: never): never {
    throw new Error(`Unexpected object: ${x}`);
}
