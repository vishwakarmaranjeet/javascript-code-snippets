
// Array splice & slice method example
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

[1,2,4,5,6].map((item, index)=>{
    console.log(item, index);
})

let studentObj = [
    {name:'Amit', std:'10th', location:'Mumbai', marks:120},
    {name: 'Ramesh', std:'10th', location:'Mumbai', marks:80},
    {name: 'Vinit', std:'10th', location:'Mumbai', marks:100}
]

// Filter method for filter student object
let filteredLoacation = studentObj.filter(item => item.marks === 100);
console.log(filteredLoacation);

// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
let found = studentObj.find((item)=>{
    return item.marks >= 100;
})
console.log(found);
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
let someelem = studentObj.some((item)=>{
    return item.marks >= 200;
})
console.log(someelem);

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
let totalVal = studentObj.reduce((acc, obj)=>{
    return acc + obj.marks;
},0)
console.log(totalVal);

let numele = [10,20,30,40,50];
let total = numele.reduce((accumulator, item)=>{
    return accumulator + item;
})
console.log(total);

// Series the array items
const arr = [0, 1, 1, 0, 0 , 0, 1]
const nonRepeating = []
for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 1) {
    nonRepeating.push(arr[i])
  }
    if(arr[i] === 0) {
    nonRepeating.unshift(arr[i])
  }
}
console.log(nonRepeating);


const arr1 = [1, 3, 1, 5, 9 , 5, 6]
const obj1 = {}
const nonRepeat = []
for(let i = 0; i < arr1.length; i++) {
    obj1[arr1[i]] = obj1[arr1[i]] ? obj1[arr1[i]] + 1 : 1
}
const data = Object.keys(obj1)
for(let i = 0; i < data.length; i++) {
    if(obj1[data[i]] === 1) {
        nonRepeat.push(parseInt(data[i]))
    }
}
console.log(nonRepeat)

let arrayList = [1,2,[3,4],[5,6,[7,8]]];
let merged = [].concat.apply([], arrayList);
console.log(merged);

let merged1 = arrayList.flat(Infinity);
console.log(merged1);


// Find max value in array
let arrNums1 = [10,20,30];
let maxVal = Math.max.apply(null, arrNums1);
console.log('Find the max value :' + maxVal);

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
let obj3 = {
    name: 'JavaScript',
    firstName: function(){
        return this.name
    }
}
let obj2 = {
    name: 'ReactJs',
    firstName : obj3.firstName,
}
console.log(obj3.firstName());
console.log(obj2.firstName());

// Prototype inheritance
function Being(){
    this.living = true;
}
Being.prototype.breathes = function(){
    console.log('true');
}

Robert.prototype = new Being;

function Robert(){
    this.blog = true;
}
Robert.prototype.getsBored = function(){
    console.log('You are alive')
}
var me = new Robert();
me.getsBored();
me.breathes();

let personObj = {
    firstName:'Ranjeet',
    lastName:'Vishwakarma',
}
let getFullName = function(location){
    console.log(`${this.firstName} ${this.lastName} ${location}`);
}
getFullName.call(personObj, 'Mumbai', 'call');
getFullName.apply(personObj, ['Delhi', 'apply']);
let bindPerson = getFullName.bind(personObj, 'Gorakhpur', 'bind')


// Function for convert date format from 01/01/1900 to 01 Jan 1900
 const convertDateFormat = (str)=>{
     let res = str.split('/');
     let monthsName =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
     var d = new Date(res[2],res[0],-res[1]);
     return res[1]+' '+monthsName[d.getMonth()]+' '+res[2];
};

// Function for convert date with day format from 01/01/1900 to Mon, 01 Jan 1900
 const getDateFormateWithDay =(str)=>{
     let res = str.split('/');
     let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
     let monthsName =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
     var d = new Date(res[2],res[0],-res[1]);
     return res[1]+' '+days[d.getDay()] + ', ' +monthsName[d.getMonth()]+' '+res[2];
 };

function colorArrayToHex(color) {
  if (!color || color.length != 4) {
    return '';
  }

  return '#' + rgbComponentToHex(color[0]) + rgbComponentToHex(color[1]) +
      rgbComponentToHex(color[2]);
}

const arr = [1, 3, 1, 5, 9 , 5, 6]
const obj = {}
const nonRepeating = []
for(let i = 0; i < arr.length; i++) {
            obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1
}
const data = Object.keys(obj)
for(let i = 0; i < data.length; i++) {
    if(obj[data[i]] === 1) {
         nonRepeating.push(parseInt(data[i]))
    }
}
console.log(nonRepeating)

const arr = [0, 1, 1, 0, 0 , 0, 1]
const nonRepeating = []
for(let i = 0; i < arr.length; i++) {
            if(arr[i] === 1) {
          nonRepeating.push(arr[i])
  }
           if(arr[i] === 0) {
          nonRepeating.unshift(arr[i])
  }
}
console.log(nonRepeating) 

Format 2 Numbers decimal

var num1 = "1";
document.getElementById('num1').innerHTML = (Math.round(num1 * 100) / 100).toFixed(2);
var num2 = "1.341";
document.getElementById('num2').innerHTML = (Math.round(num2 * 100) / 100).toFixed(2);
var num3 = "1.345";
document.getElementById('num3').innerHTML = (Math.round(num3 * 100) / 100).toFixed(2);

const getPassingGrades = grades =>{
	return grades.filter(grade => grade > 10);
}
console.log(getPassingGrades([15, 8, 13]));

// function for check valid json
function isValidJson(json){
	try{
		JSON.parse(json);
		return true;
	}catch(3){
		return false;
	}
}
var validjson = '{"firstName":"James","lastName":"Bond"}'; 
var invalidjson = '{"firstName""James","lastName":"Bond"}'; 

isValidJson(validjson);

// to check empty object
Object.keys(obj).length === 0 && obj.constructor === Object 

Object.entries(obj).length === 0 && obj.constructor === Object 

// Return current date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
console.log(today);


// returning index of an element
let arr = [5, 12, 15, 20, 45];
function isLargeNumber(element){
	return element > 10;
}
console.log(arr.findIndex(isLargeNumber));

// Sorting the numbers
let numbers = [1, 2, 5, 3, 4];
numbers.sort((a, b) => b - a);
console.log(numbers); // [5, 4, 3, 2, 1]

// program to generate random strings

// declare all characters
let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(generateString(5));
