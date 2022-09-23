// //this page is just so i can debug.

// const null2 = [1, "apple", 2, "pear", 5];
//         for(let item of null2) {
//             if(item === 1) {
//                 console.log(item);
//                 // return item;
//             }else {
//                 console.log(item);
//             };
//         };

// let x = false;
// if(x === true) {
//     console.log(`${x}`);
// }else {
//     console.log(x);
// };

// function undef() {
//     // console.log(`undefined`);
// };

// console.log(undef());

// const string = "Hello World";
// const boolean = true;
// const null1  = null;
// let undefined1;
// let num = 11;

// //Hello World, the value 11 is not a true or undefined data type.

// console.log(string + ", the value " + num + " is not a " + boolean + " or " +  undefined1 + " data type.");
// console.log(`${string}, the value ${num} is not a ${boolean} or ${undefined1} data type.`);


// const arrayOfDatatypes = [string, boolean, null1, undefined1, num];
// console.log(arrayOfDatatypes);

// //undefined
// // let a;
// let a;
// for(let i = 0; i < 6; i++) {
//     if(i === 5) {
//         let a = 1;
//         console.log(a);
//     }else {
//         console.log(i);
//     };   
// };
// console.log(a);


// const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     function forFunction() {
//         for(let i = 0; i < numArray.length; i++) {
//             if(i === 0) {
//                 console.log("true:", i);
//             }else {
//                 console.log("false:", i);
//             };
            
//         };
//     };

//     forFunction();
// // console.log(forFunction());


// let stringVariable = "Hello World";
// let num1 = 11;
// let boolean1 = true;

// let num2 = 20.2;

// let  = "let"



















console.log("DOG YEARS");

let myAge = 25;
console.log(myAge);
let earlyYears = 2;
console.log(earlyYears);
earlyYears *= 10.5
console.log(earlyYears)
let laterYears = myAge - 2
console.log(laterYears);

laterYears *= 4

console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;

console.log(myAgeInDogYears)

let myName = "tremane".toLowerCase()
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

const alienList = [{
    species:"martien",  
    color:"purple", 
    name: "gerred"
},
{
    species:"predator",  
    color:"green", 
    name: "gurdis"
}]

console.log(alienList);
console.log(alienList[0], alienList[1])

console.log(alienList[1].color);
let x = alienList[1].color;
console.log(x);

console.log(x[1]);

for(element of alienList) {
    console.log(element);
}







