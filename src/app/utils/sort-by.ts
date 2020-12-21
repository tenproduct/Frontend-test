export function sortBy<T>(items: T[], compareFn: (a: T, b: T) => number): T[] {
    return [...items].sort(compareFn);
}
