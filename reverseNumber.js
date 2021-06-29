// let word = "hello";
// let reverseWord = "";

var digit, result = 0
function reverseNum(n) {
    while (n) {
        digit = n % 10  //  Get right-most digit. Ex. 123/10 → 12.3 → 3
        result = (result * 10) + digit  //  Ex. 123 → 1230 + 4 → 1234
        n = n / 10 | 0  //  Remove right-most digit. Ex. 123 → 12.3 → 12
    }
    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) return 0;
    return result
}

console.log(reverseNum(4567));