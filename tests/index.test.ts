import { merge } from "../src/mergeme";

describe("Tests of the merger function.", () => {

    test("Two empty number arrays should result in an empty number array.", () => {
        expect(merge([], [])).toStrictEqual([]);
    });

    test("Empty first array should result in the second array.", () => {
        expect(merge([], [4, 20, 69])).toStrictEqual([4, 20, 69]);
    });

    test("Empty second array should result in the first array.", () => {
        expect(merge([1, 3, 37], [])).toStrictEqual([1, 3, 37]);
    });

    test("Two non-empty arrays should result in a \"merged\" array, where the result array is also sorted ascendingly.", () => {
        // Array #1 = First 7 square numbers.
        // Array #2 = Primes up to 47.
        expect(merge([1, 4, 9, 16, 25, 
            36, 49], [2, 3, 5, 7, 11, 
                13, 17, 19, 23, 29, 
                31, 37, 41, 43, 47]))
                .toStrictEqual([1, 2, 3, 4, 5, 
                    7, 9, 11, 13, 16, 
                    17, 19, 23, 25, 29, 
                    31, 36, 37, 41, 43, 
                    47, 49]);
    });

    test("Arrays with some negative terms.", () => {
        expect(merge([-88, -56, -47, 10, 60], [-86, -45, 34, 71, 78])).toStrictEqual([-88, -86, -56, -47, -45, 10, 34, 60, 71, 78]);
    });    

});