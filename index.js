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
let num = 11;
const boolean = true;
let y;

//Hello World, the value 11 is not a true or undefined data type.

console.log(string + ", the value " + num + " is not a " + boolean + " or " +  y + " data type.");
console.log(`${string}, the value ${num} is not a ${boolean} or ${y} data type.`);