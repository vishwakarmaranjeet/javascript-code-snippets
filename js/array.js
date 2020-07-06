
let arrItem = ['JavaScript', 'ReactJs', 'HTML', 'CSS', 'PHP'];

// Will return element from an array without changing original array, takes two params start, end
console.log(arrItem.slice(0, 2));

// Wil add or remove an element in array it modify the original array takes n params
arrItem.splice(2, 1);
console.log(arrItem);


// Remove duplicate element from an array
// Solution 1
let arrNums = [1,2,3,2,4,5,4,6,7,8,7];
let len = arrNums.length;
let tempArr= [];
for(let i=0; i<len; i++){
    //Array.indexOf() returns -1 if the item is not found.
    //If the item is present more than once, it returns the position of the first occurrence.
    if(tempArr.indexOf(arrNums[i]) === -1){
        tempArr.push(arrNums[i]);
    }
}
//console.log(tempArr);

// Solution 2
let obj = {};
for(let i of arrNums){
    obj[i] = true;
}
let tempObj = Object.keys(obj);
//console.log(tempObj);

let person = {
    name:'Amit',
    location:'Mumbai',
}
// Store object values into an array
console.log(Object.values(person));
// Store object values & keys into an array
console.log(Object.entries(person));


