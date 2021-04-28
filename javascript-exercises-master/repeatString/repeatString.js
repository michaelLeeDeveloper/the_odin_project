const repeatString = function(inputString, number) {
    let newStr = ""
    if(number > 0 ){
    newStr = inputString;
    }

    if(number < 0) {
        return "ERROR";
    }
    
    for(let i = 1; i < number; i++){
        newStr += inputString;
    }
    return newStr;
}

module.exports = repeatString
