//this page is just so i can debug.

const null2 = [1, "apple", 2, "pear", 5];
        for(let item of null2) {
            if(item === 1) {
                console.log(item);
                // return item;
            }else {
                console.log(item);
            };
        };

let x = false;
if(x === true) {
    console.log(`${x}`);
}else {
    console.log(x);
};

function undef() {
    // console.log(`undefined`);
};

console.log(undef());

const string = "Hello World";
const boolean = true;
const null1  = null;
let undefined1;
let num = 11;

//Hello World, the value 11 is not a true or undefined data type.

console.log(string + ", the value " + num + " is not a " + boolean + " or " +  undefined1 + " data type.");
console.log(`${string}, the value ${num} is not a ${boolean} or ${undefined1} data type.`);


const arrayOfDatatypes = [string, boolean, null1, undefined1, num];
console.log(arrayOfDatatypes);

//undefined
// let a;
let a;
for(let i = 0; i < 6; i++) {
    if(i === 5) {
        let a = 1;
        console.log(a);
    }else {
        console.log(i);
    };   
};
console.log(a);


const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    function forFunction() {
        for(let i = 0; i < numArray.length; i++) {
            if(i === 0) {
                console.log("true:", i);
            }else {
                console.log("false:", i);
            };
            
        };
    };

    forFunction();
// console.log(forFunction());