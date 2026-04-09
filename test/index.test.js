// __tests__/script.js
const halflifeArray = require('../index.js');

describe('halflifeArray', () => {

    test('returns an array', () => {
        const result = halflifeArray();
        expect(Array.isArray(result)).toBe(true);
    });

    test('first value equals readingAmount', () => {
        const result = halflifeArray(100);
        expect(result[0]).toBe(100);
    });

    test('last value is just below amountLimit', () => {
        const result = halflifeArray(100, 300, 10, 0.5);
        const last = result[result.length - 1];
        expect(last).toBeLessThan(0.5);
    });

    test('array decreases over time', () => {
        const result = halflifeArray(100, 300, 10, 0.5);
        for (let i = 1; i < result.length; i++) {
            expect(result[i]).toBeLessThan(result[i - 1]);
        }
    });

    test('uses default parameters', () => {
        const result = halflifeArray();
        expect(result[0]).toBe(100);
    });

});
