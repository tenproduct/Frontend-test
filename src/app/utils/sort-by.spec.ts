import { sortBy } from "./sort-by";

describe('SortBy', () => {
    it('should return a new sorted array', () => {
        const items = ['a', 'c', 'b'];

        const sortedArray = sortBy(items, (a, b) => a < b ? 1 : -1);
        expect(sortedArray).toEqual(['c', 'b', 'a']);
        expect(sortedArray).not.toBe(items);
    });
});