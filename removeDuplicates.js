// let removeDuplicates = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i + 1]) {
//             nums.splice(i, 1);
//         }
//     }
//     return nums;
// };


/** approach -2 */
// let removeDuplicates = function (nums) {
//     let frequencyCounter = {};
//     for (let val of nums) {
//         frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
//     }
//     console.log(frequencyCounter);
//     return Object.keys(frequencyCounter).length;
// };



/** approach -3 */
var removeDuplicates = function (nums) {
    if (nums.length == 0) return 0;

    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));