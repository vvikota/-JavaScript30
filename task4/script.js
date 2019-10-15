const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galiley', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Plank', year: 1858, passed: 1947},
];



// 1. filter
const fifteen = inventors.filter(inventor =>
    (inventor.year >= 1500 && inventor.year < 1600));

//console.table(fifteen);

// 2. map
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
//console.table(fullNames);

const liveInv = inventors.map(inventor => `${inventor.first} live ` + (inventor.passed - inventor.year));
//console.table(liveInv);

// 3.sort
const ordered = inventors.sort((a,b) => (a.year > b.year ? 1 : -1));
//console.log("ordered table");
//console.table(ordered);

// 4.reduce
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
},0);

//console.log(totalYears);

// 5.sortSecond
const oldest = inventors.sort((a,b) => {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
});
//console.table(oldest);

// 6. 
const numbers = [1,324,45,12,34,1,3,5,75,7,0,67,3,45,35,6,12,356,5,64,5,3,43,5,6,6,7,9,9,3,3,7,4,2,56,7,2,5,45,6,12,6,34,6,1,3,5,75,7,0,67,3,45,35,6,12,356,5,64,5,,3,43,5,6,6,7,9,9,3,3,7,4,2,56,7,2,5,45,12,34,6,1,3,5,75,7,0,67,3,45,35,6,12,356,5,64,5,3,43,5,6,6,7,9,9,3,3,7,4,2,56,7,2,5,45,6,12,34,1,3,5,75,7,0,67,3,45,35,12,356,5,64,5,3,43,5,6,6,7,9,9,3,3,7,4,2,56,7,2,5,45,6,12,6,34,6,1,3,5,75,7,0,67,3,45,35,6,12,356,5,64,5,,3,43,5,6,6,7,9,9,3,3,7,4,2,56,7,2,5,5,6,6,23,2,32,3,3,2,3,23,2,32,,3,4,34,23,4,234,2,34,23,4,23,42,34,23,4,23,4,234,23,4,23,4,54,6,45,7,87,69,0,7,67,867,87,56,745,6,45,34,6,4567,567,8,567,45,6,455,34,5,454,234,23,4,234,2,5443,5,34,3,4,23,42,5,5,34,53,45,2,4]

const resultObj = numbers.reduce((obj, num) => {
    if(!obj[num]) {
        obj[num] = 0;
    }
    obj[num]++;
    return obj;
}, {});

let result = 0;
let resultKey;
for (let key in resultObj){
    if (resultObj[key] > result) {
        result = resultObj[key];
        resultKey = key;
    }    
};

console.log(`${resultKey} repeat ${result}`);
