export function merge(collection_1: number[], collection_2: number[]): number[] {

    // My assumptions:
    // 1. Arrays in arguments are already sorted ascendingly.
    // 2. The function is mergesort of two already-sorted arrays, not 
    //    appending array #2 to array #1.
    // 3. The function allows duplicates.

    let col1: number[] = collection_1;
    let col2: number[] = collection_2;
    let result: number[] = [];

    if (col1.length == 0) {
        return col2;
    }

    if (col2.length == 0) {
        return col1;
    }

    if (col1.length == 0 && col2.length == 0) {
        return result;
    }

    while (col1.length != 0 || col2.length != 0) {

        if (col1.length == 0) {

            result.push(col2[0]);
            col2.shift();
            continue;

        } else if (col2.length == 0) {

            result.push(col1[0]);
            col1.shift();
            continue;

        }

        if (col1[0] < col2[0]) {

            result.push(col1[0]);
            col1.shift();
            continue;

        } else if (col2[0] < col1[0]) {

            result.push(col2[0]);
            col2.shift();
            continue;

        } else if (col1[0] == col2[0]) {

            result.push(col1[0]);
            col1.shift();
            result.push(col2[0]);
            col2.shift();
            continue;

        }

    }

    return result;
}


let arrayOne: number[] = [1, 1, 2, 3, 5, 8];
let arrayTwo: number[] = [-9, -4, -1, 0, 1, 4, 9];

console.log(merge(arrayOne, arrayTwo));