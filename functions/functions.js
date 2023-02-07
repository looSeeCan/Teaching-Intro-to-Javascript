///1. const stringVariable = "Hello World";//keyword (const), identifier(string), assignment operator(=), value(Hello World), semicolon(they are read and used y the compiler to distinguish between seperate statements)
const stringVariable = "Hello World";
console.log(stringVariable);
/// const stringNameVariable = "Lucycan"
const stringNameVariable = "Lucycan";
console.log(stringNameVariable);
///2. const booleanVariable = true;
const booleanVariable = true;
console.log(booleanVariable);
///3. const null1 = null;
const nullVariable = null;
console.log(nullVariable);
///4. let undefinedVariable1;
let undefinedVariable;
console.log(undefinedVariable);
///5. const num = 44;
const num = 44;
console.log(num);
///6. const objVariable = {firstName: "Lucycan", lastName: "Ly"};
const objVariable = {
    firstName: "Lucycan",
    lastName: "Ly"
};
console.log(objVariable);
///////////////////////////////////////////

/// function greeting return Hello World My name is Lucycan /// regular function, arrow
/// function return num + 1

const getSum = (num1, num2) => {
    let x = getAnotherNum();
    return  x + num1 + num2;
};

console.log(getSum(5,5));

function getAnotherNum() {
    return 5;
};


///test







