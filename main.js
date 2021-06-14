console.log("Hello, World!")
// check if the given array has squared number in the other array
/**
 * same([1,2,3] , [1,9,4]) -> true , order does not matter
 * same([1,2,3] [1,9]) -> false , missing number
 * same([1,2,1] [4,4,1]) -> false , frequency differ
 */

function same(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }
    else {
        for (let i = 0; i < arr1.length; i++) { // --- loop1
            let index = arr2.indexOf(arr1[i] ** 2); // --- nested loop2 , indexOf
            if (index === -1) {
                return false;
            }
            arr2.splice(index, 1);
            return true;
        }
    }

}

console.log(same([1, 2, 3], [4, 9, 9]));

// time complexity = o(n^2);


/**
 * Refactored code using frequency counter logic
 */

function refactoredSame(ar1, ar2) {
    if (ar1.length !== ar2.length) {
        return false;
    }
    let frequecyCounter1 = {};
    let frequecyCounter2 = {};
    for (let val of ar1) {
        frequecyCounter1[val] = (frequecyCounter1[val] || 0) + 1
    }

    for (let val of ar2) {
        frequecyCounter2[val] = (frequecyCounter2[val] || 0) + 1
    }

    for (let key in frequecyCounter1) {
        if (!(key ** 2 in frequecyCounter2)) { // check object key
            return false;
        }
        if (frequecyCounter2[key ** 2] !== frequecyCounter1[key]) { // check object value
            return false;
        }
    }
    return true;
}
console.log(refactoredSame([1, 2, 3], [4, 1, 9]));
//time complexity : o(n);