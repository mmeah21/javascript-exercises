const fibonacci = function(number) {
let input = parseInt(number);

if(input <0){
    return "OOPS";
}

let fib =[0,1];
for (var i =2;i<=input; i++){
    fib[i] = fib[i-1]+fib[i-2];
};

console.log(fib);

return fib[input];
}
//accepts number to return that position of the sequence
//accepts strings
//does not accept negative return OOPS
//convert from string to number

// Do not edit below this line
module.exports = fibonacci;
