

/** approach -1 */
// time complexity : O(n^3)
// spcae compelexity: O(1)

// let threeSum = function (nums) {
//     let result = [];
//     nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;
//         for (let j = i + 1; j < nums.length; j++) {
//             if (j > i + 1 && nums[j] === nums[j - 1]) continue;
//             for (let k = j + 1; k < nums.length; k++) {
//                 if (k > j + 1 && nums[k] === nums[k - 1]) continue;
//                 if (nums[i] + nums[j] + nums[k] == 0) {
//                     result.push([nums[i], nums[j], nums[k]]);
//                 }
//             }
//         }

//     }
//     return result;
// };

/** Approach -2 */
/** nums[i] + nums[j] + nums[k] = 0
 * nums[j] + nums[k] = 0 - nums[i]
 * 
 * - fix the first index as first element , iterate
 * - in the remaining sorted substring, use two pointer method and check for the given cases
 * - sum = num[j] + num[k] 
 * - case 1:
 * sum > target
 * eliminate the last number
 * right-1
 * 
 * case 2 : 
 * sum < target
 * eliminate the left number
 * left++
 * 
 * case 3 :
 * sum === tagret -- you got one pair, look for another pair untill end of array
 */

let threeSum = function (nums) {
    var solutions = [];
    var target = 0;
    nums.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            var lo = i + 1;
            var hi = nums.length - 1;
            var sum = - nums[i];
            while (lo < hi) {
                if (nums[lo] + nums[hi] === sum) {
                    solutions.push([nums[i], nums[lo], nums[hi]]);
                    while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
                    while (lo < hi && nums[hi] == nums[hi - 1]) hi--;
                    lo++; hi--;
                } else if (nums[lo] + nums[hi] > sum) {
                    hi--;
                } else {
                    lo++;
                }
            }
        }
    };
    return solutions;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));