function isPalindrome(numberToCheck:number):Boolean
{
    if(numberToCheck < 0)
    {
        return false;
    }

    let numberAsArray:number[] = [];
    let numberAsString = numberToCheck.toString();
    let numberReversedAsArray:number[] = [];
    let numberOfIdenticalDigits = 0;

    for(let i = 0; i < numberAsString.length; i++)
    {
        numberAsArray.push(Number(numberAsString[i]))
    }
    
    let numberAsArrayTemp = numberAsArray
        .map(number => number)
   
    numberReversedAsArray = numberAsArrayTemp.reverse();

    for(let i = 0; i < numberAsArray.length; i++)
    {
        if(numberAsArray[i] === numberReversedAsArray[i])
        {
            numberOfIdenticalDigits++;
        }
        if(numberOfIdenticalDigits === numberAsArray.length)
        {
            return true;
        }
    }
    return false;
}
