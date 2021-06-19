let arr = [-1, 0, 1];

// function twoSum(ar) {
//     for (let i = 0; i < ar.length; i++) {
//         for (let j = i + 1; j < ar.length; j++) {
//             if (ar[i] + ar[j] === 0) {
//                 console.log(ar[i], ar[j]);
//                 console.log('----');
//             }
//         }
//     }
// }


/**
 * Apporach two
 */

function twoSum(arr) {
    let target = 0
    let numObject = {};
    for (var i = 0; i < arr.length; i++) {
        let thisNum = arr[i];
        numObject[thisNum] = i;
    }
    console.log(numObject)
    for (var i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
            return [i, numObject[diff]];
        }
    }
}
console.log(twoSum(arr));