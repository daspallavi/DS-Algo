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
        for (let i = 0; i < arr1.length; i++) {
            let index = arr2.indexOf(arr1[i] ** 2);
            if (index === -1) {
                return false;
            }
            arr2.splice(index, 1);
            return true;
        }
    }

}

console.log(same([1, 2, 3], [4, 9, 9]));