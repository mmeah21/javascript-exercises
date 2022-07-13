const getTheTitles = function(array) {
    let listofTitles=[];

    for (var i =0; i<array.length; i++){
        listofTitles.push(array[i].title);
    }

    return listofTitles;

};

// Do not edit below this line
module.exports = getTheTitles;
