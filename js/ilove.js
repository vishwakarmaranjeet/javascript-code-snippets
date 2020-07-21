// Find max value in array
let arrNums = [10,20,30];
let maxVal = Math.max.apply(null, arrNums);
console.log(maxVal);

// Count the length of associate array / object
let counterObj = {
    A : 3,
    B : 4,
    C : 5,
}
// Method 1
console.log(`Method 1 : ${Object.keys(counterObj).length}`);

// Method 2
console.log(`Method 2 : ${Object.getOwnPropertyNames(counterObj).length}`);

// Method 3
function getLength(object){
    let count = 0;
    for(key in object){
        // hasOwnProperty method check own property of object
        if(object.hasOwnProperty(key)) count ++;
    }
    return count;
}
console.log(`Method 3 : ${getLength(counterObj)}`);


// Playing with object
let obj = {
    name: 'JavaScript',
    firstName: function(){
        return this.name
    }
}
let obj2 = {
    name: 'ReactJs',
    firstName : obj.firstName,
}
console.log(obj.firstName());
console.log(obj2.firstName());