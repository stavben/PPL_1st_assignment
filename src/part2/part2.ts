import { slice } from "ramda";


//#1
const countVowels = (str: string): number => {
    return str.match(/[aAeEiIoOuU]/g).length;
}

console.log(countVowels("This is SOME Text"));

//#2

const rec : (str : string[], last : string, current : number, counter : number, output :string )=> string = (str,last,current,counter,output) =>{
    if (current==str.length+1)
    return output;
    else if (last== str[current])
    return rec(str, last, ++current,++counter,output);
    else return rec(str, str[current], ++current, 1,output.concat(last+counter));
}

export const runLengthEncoding : (str : string)=> string = str =>{
    let arr : string[] = stringToArray(str); 
    return rec(arr,arr[0],0,0,"");
};

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
