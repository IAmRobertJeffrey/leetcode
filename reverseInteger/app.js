
function reverse(numberToReverse)
{
    let reversedNumber;
    let arrayOfDigits = []
    let reversedArrayOfDigits = []
    
    
        for(let i = 0; i < numberToReverse.toString().length; i++)
        {
            arrayOfDigits.push(numberToReverse.toString()[i]);  
        }
        let copy = arrayOfDigits.map(currentDigit => currentDigit);   

        for(let i = 0; i < copy.length; i)
        {   
            let currentPop = copy.pop();
            if(currentPop)
            {
                reversedArrayOfDigits.push(currentPop);
            }
        };
    
        let reversedString = "";

        reversedArrayOfDigits.forEach(currentLetter => 
        {
            reversedString += currentLetter;
        })
        
        if(reversedString[reversedString.length-1] === "-")
        {
            
            
            reversedString = reversedString.replace("-", "");
            reversedString = "-" + reversedString;
            
        }

        reversedNumber = Number(reversedString)
        if(reversedNumber >= -2147483648 && reversedNumber <= 2147483647)
        {
            return reversedNumber;
        }
        return 0;
}
