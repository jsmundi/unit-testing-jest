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

describe("Reduce", () => {

    test("Custom reduce function", () => {
        const arr = [1, 2, 3, 4];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        expect(functions.highorderMethods.reduce(arr, reducer, 1)).toEqual(11);
    });
});

describe("Reduce Right", () => {

    test("Custom reduce right function", () => {
        const arr = [1, 2, 3, 4];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        expect(functions.highorderMethods.reduceRight(arr, reducer, 1)).toEqual(11);
    });
});

describe("stringify", () => {

    test("Number", () => {
        expect(functions.stringifyMethods.mystringify(123)).toEqual('123');
    });
    test("Boolean", () => {
        expect(functions.stringifyMethods.mystringify(true)).toEqual('true');
    });
    test("String", () => {
        expect(functions.stringifyMethods.mystringify("Hello World")).toEqual('Hello World');
    });
    test("Array", () => {
        expect(functions.stringifyMethods.mystringify([1, 2, 3])).toEqual("[1, 2, 3]");
    });
    test("Null", () => {
        expect(functions.stringifyMethods.mystringify(null)).toEqual("null");
    });
    test("undefined", () => {
        expect(functions.stringifyMethods.mystringify(undefined)).toEqual("undefined");
    });
    test('Function', () => {
        expect(() => {
            functions.stringifyMethods.mystringify((x, y) => x + y);
        }).toThrow();
    });
    test("Object", () => {
        const obj = {x: 5, y: 6};
        const exp = "{ x: 5, y: 6 }";
        expect(functions.stringifyMethods.mystringify(obj)).toEqual(exp);
    });

});