const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

function returnFirstTwoDrivers(array){
    let newArray = [];
    for(let d of array){
        if(d === 'Sally' || d === 'Bob'){
            newArray.push(d);
        }
    }
    return newArray;
}
returnFirstTwoDrivers(drivers);

function returnLastTwoDrivers(array){
    let newArray = [];
    for(let d of array){
        if(d === 'Freddy' || d === 'Claudia'){
            newArray.push(d);
        }
    }
    return newArray;
}
returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    const fareQuintupler = function(fare){return int * fare;}
    return fareQuintupler;
}
createFareMultiplier(4)(2);

function fareDoubler(total){
    return total * 2;
}
fareDoubler(createFareMultiplier)

function fareTripler(total){
    return total * 3;
}
fareTripler(createFareMultiplier)

function selectDifferentDrivers(array, funct){
    return funct(array);
}
selectDifferentDrivers(drivers, returnFirstTwoDrivers)