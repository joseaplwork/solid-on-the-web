import {
    objToTuple,
    removeZeroes,
    sortAscending,
    take
} from '../paint-data';

describe('Converting object to tuples', () => {
    it('creates an array of [key, value] tuples', () => {
        const origin = { foo: 'bar', baz: 'bat'};
        const expected = [
            ['foo', 'bar'],
            ['baz', 'bat'],
        ]

        expect(objToTuple(origin)).toEqual(expected);
    });
});

describe('throwing out zeroes', () => {
    it('removes tuples with a 0 value', () => {
        const origin = [
            ['blue', 1],
            ['red', 0],
            ['green', 2],
        ];
        const expected = [
            ['blue', 1],
            ['green', 2],
        ]

        expect(removeZeroes(origin)).toEqual(expected);
    });
});

describe('sort ascending ', () => {
    it('returns an array ordered by index 1', () => {
        const origin = [
            ['blue', 1],
            ['red', 0],
            ['green', 2],
        ];
        const expected = [
            ['red', 0],
            ['blue', 1],
            ['green', 2],
        ]

        expect(sortAscending(origin)).toEqual(expected);
    });
});

describe('taking the first n', () => {
    it('return an array of n length', () => {
        const origin = [
            ['blue', 1],
            ['red', 0],
            ['green', 2],
        ];
        const expected = [
            ['blue', 1],
            ['red', 0],
        ]

        expect(take(2, origin)).toEqual(expected);
    });
});