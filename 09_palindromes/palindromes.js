const palindromes = function (array) {
let original = array.toLowerCase();
original = removeSpaces(original);
let backwards = original.reverse();
let flag = true;

for (var i =0; i<original.length;i++){
    if(original[i]==backwards[i])
        flag = true;
        else{
            flag = false;
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
        else
        i++;
    }
    return removed;
}


//pass an array of objects ignoring punctuation and space.
//convert all to lowercase
//assign reverse array
//compare the two arrays

//ignore uppercase, punctuation and space
// Do not edit below this line
module.exports = palindromes;
