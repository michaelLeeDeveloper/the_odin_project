const reverseString = function(inputString) {
    let newStr = "";
    for(let i = (inputString.length - 1); i >= 0 ; i--){
        newStr += inputString.charAt(i);
    }
    return newStr;
}

module.exports = reverseString
