const findTheOldest = function(array) {


    const people = array.map(person =>{
        return person.Age = howOldis(person);
    })

    console.log(array);

    const oldAf = array.reduce((accumulator, person) =>{
        if(accumulator.Age >= person.Age)
            return accumulator;
            else
            return accumulator = person;
    }, 0)
    console.log(oldAf);
    return oldAf;
}
const today = new Date();
const thisYear = today.getFullYear();

function howOldis (person){
    if(person.hasOwnProperty('yearOfDeath')){
    return person.yearOfDeath - person.yearOfBirth;
    }
    else {
        return thisYear - person.yearOfBirth;
    }
}

 
//find age of each person
// Add property AGE
// check IF object has PROPERTY yearOfDeath
// IF no death year get age by current year and month (7-1-2022)
//compare and return the oldest

// Do not edit below this line
module.exports = findTheOldest;
