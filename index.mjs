import arrGenerator from "./arrGenerator.mjs";
import binarySearch from "./binary_search.mjs";
let arr = arrGenerator(100);
const callFunc = (func, arr, extraNum) => console.log(func(arr, extraNum));

callFunc(binarySearch, arr, 12);
// node --experimental-modules test.mjs