/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let carry = 0;
    for (let i = digits.length - 1 ; i >= 0; i--){
        carry = (digits[i] + 1 == 10)? 1 : 0;
        if (carry == 0){
            digits[i] = digits[i] + 1;
            break;
        }else{
            digits[i] = 0 ; 
        }
    }
    if (carry == 1){
        digits.unshift(1);
    }
    return digits;
};


/*

- We start with the last digit of the number and work our way up.
- Check if the last digit is 9. If it is, we set it to 0 and carry 1 to the next digit.


*/
