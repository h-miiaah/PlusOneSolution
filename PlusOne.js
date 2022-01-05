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
- If the carry is 1 after this step, it means that all digits are 9. In this case, we prepend a 1 to the beginning of the array and we are done.
- If the carry is 0, it means that there is a 1 in some digit. We just increment that digit and we are done.
- Finally we return the updated digits array.

*/
