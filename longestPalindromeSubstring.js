let longestPalindromeSubStr = function (str) {
    //edge case scenario
    if (str.length < 1 || str === null) {
        return '';
    }

    let longest = '';

    for (let i = 0; i < str.length; i++) {

        let oddPalindrome = expandFromCenter(str, i, i);
        let evenPlaindrome = expandFromCenter(str, i - 1, i);

        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome.length;
        }

        if (evenPlaindrome.length > longest.length) {
            longest = evenPlaindrome.length;
        }
    }
    return longest;
}


function expandFromCenter(str, left, right) {
    let i = 0;
    while (str[left - i] && str[left - i] === str[right + i]) {
        i++;
    }
    i--;

    return str.slice(left - i, right + i + 1);
}
console.log(longestPalindromeSubStr('abbaccddcc'));