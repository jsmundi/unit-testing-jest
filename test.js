const functions = require('./exercises');

describe("Sum", () => {

    test("Sum of an array", () => {
        expect(functions.arrayMethods.sum([1,3,4,5])).toEqual(13);
    });

    test('Throws on not a number', () => {
        expect(() => {
            functions.arrayMethods.sum([1,2,4,"X"]);
        }).toThrow();
    });
});

describe("Remove", () => {

    test("Remove Element", () => {
        expect(functions.arrayMethods.remove([1,3,4,5], 3)).toEqual([1,4,5]);
    });
});

describe("Duplicate", () => {

    test("Check for duplicates", () => {
        const arr = [1, 1, 'a', 'b', 'c', 5, 6, 8, 9, 10, 10,'a'];
        expect(functions.arrayMethods.findDuplicates(arr)).toContain(1, 10, 'a');
    });
});

describe("Map", () => {

    test("Custom map function", () => {
        const arr = [1, 4, 9, 16];
        expect(functions.highorderMethods.map(arr, x=>x-1)).toEqual([0, 3, 8, 15]);
    });
});

describe("Filter", () => {

    test("Custom filter function", () => {
        const arr =['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
        const exp = ["exuberant", "destruction", "present"];
        expect(functions.highorderMethods.filter(arr, x=>x.length>6)).toEqual(exp);
    });
});
