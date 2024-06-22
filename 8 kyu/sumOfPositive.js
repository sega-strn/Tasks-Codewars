/*
-- Sum of Positive --

You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
*/


function positiveSum(arr) {
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > 0) {
    //         sum += arr[i]
    //     }
    // }
    // return sum

    // вариант 2 (reduce)
    let res = arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
    return res
}

console.log(positiveSum(([1, 2, 3, 4, 5]))) // 15
console.log(positiveSum(([1, 2, 3, -4, 5]))) // 11
