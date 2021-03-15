import { slice } from "ramda";


//#1
const countVowels = (str: string): number => {
    return str.match(/[aAeEiIoOuU]/g).length;
}

console.log(countVowels("This is SOME Text"));

//#3
let isBalancedParenthesis = (str: string, parenthesesLeft: string, parenthesesRight: string,) => {
    let wrongArrangement = false;
    let sumOfOarenthesesThatAreEqual = !str.split('').reduce((uptoPrevChar: number, thisChar: string) => 
    {
        if(uptoPrevChar < 0)
            wrongArrangement = true;
        else 
        {
            if(thisChar === parenthesesLeft)
                return ++uptoPrevChar;
            else if (thisChar === parenthesesRight) 
                return --uptoPrevChar;
        }
        return uptoPrevChar 
    }, 0);
    return wrongArrangement ? false : sumOfOarenthesesThatAreEqual;
}

let isPaired = (str: string) =>{
    return isBalancedParenthesis(str, "(", ")") && isBalancedParenthesis(str, "[", "]") && isBalancedParenthesis(str, "{", "}");
}

console.log(isPaired("This is ]some[ (text)"))
