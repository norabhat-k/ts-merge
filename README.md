# ts-merge
A TypeScript test on coding and implementing unit tests.

# Problem
(For some reasons, the problems are paraphrased from the original)
- Given two ascendingly-sorted number arrays, return a sorted number array with elements from the two latter arrays (no sorting functions allowed).
- Add unit tests.
- Guide how to execute the program and run unit tests.

# How to run
Requires node.js with TypeScript installed.
1. Download/Clone this repo.
2. Open up a terminal and point it to `ts-merge` folder.
3. Install all dependencies: `npm install`. This may take a while.
   Here are dependencies:
   - `typescript`
   - `jest`
   - `ts-jest`
   - `@types/jest`
5. To run the program, type `npx tsc src/mergeme.ts`, then `node src/mergeme.js` (`ts` first, then `js`).
6. To run the unit test, type `npx jest`. There are 5 unit tests.
7. To add more unit tests, edit `index.test.ts` inside `tests` folder.


