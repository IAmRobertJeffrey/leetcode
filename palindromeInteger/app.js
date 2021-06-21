function checkPalindrome(numberToCheck) {
    if (numberToCheck < 0) {
        return false;
    }
    var numberAsArray = [];
    var numberAsString = numberToCheck.toString();
    var numberReversedAsArray = [];
    for (var i = 0; i < numberAsString.length; i++) {
        numberAsArray.push(Number(numberAsString[i]));
    }
    var numberAsArrayTemp = numberAsArray
        .map(function (number) { return number; });
    numberReversedAsArray = numberAsArrayTemp.reverse();
    console.log(numberAsArray);
    console.log(numberReversedAsArray);
    var checked = 0;
    for (var i = 0; i < numberAsArray.length; i++) {
        if (numberAsArray[i] === numberReversedAsArray[i]) {
            checked++;
        }
        if (checked === numberAsArray.length) {
            console.log("true");
            return true;
        }
    }
    return false;
}
checkPalindrome(101);
