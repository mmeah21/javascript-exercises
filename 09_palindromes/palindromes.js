const palindromes = function (array) {
let original = array.toLowerCase();
//console.log("Original Array: "+original);
original = removeSpaces(original);
console.log("removed grammar original: "+original);
let backwards = turn(original);
console.log("backwards Array: "+backwards);
let flag = true;

for (var i =0; i<original.length;i++){
    if(original[i]===backwards[i]){
        //console.log("Original ["+i+"]"+original[i]+" compare "+"Backwards["+i+"]"+backwards[i])
        flag = true;
    }
        else if(original[i]!= backwards[i]){
            flag = false;
            console.log(flag);
            break;
        }
    }
    return flag;
};
function removeSpaces(array){
    let removed=[];
    for (var i =0; i<array.length;i++){
        if(array[i]!= ' ' && array[i]!= ',' && array[i]!= '.' && array[i]!= '!' && array[i]!= '?' && array[i]!= '\'' && array[i]!= '"')
        removed.push(array[i]);
    }
    return removed;
}
function turn(array){
    let reverse = [];
    for (var i = array.length-1; i>=0;i--){
        reverse.push(array[i]);
    }
    return reverse;
}

//pass an array of objects ignoring punctuation and space.
//convert all to lowercase
//assign reverse array
//compare the two arrays

//ignore uppercase, punctuation and space
// Do not edit below this line
module.exports = palindromes;
