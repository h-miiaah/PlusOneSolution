/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let carry = 0;
    for (let i = digits.length - 1 ; i >= 0; i--){
        carry = (digits[i] + 1 == 10)? 1 : 0;
    }
};