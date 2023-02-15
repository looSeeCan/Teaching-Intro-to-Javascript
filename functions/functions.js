// ///1. const stringVariable = "Hello World";//keyword (const), identifier(string), assignment operator(=), value(Hello World), semicolon(they are read and used y the compiler to distinguish between seperate statements)
// const stringVariable = "Hello World";
// console.log(stringVariable);
// /// const stringNameVariable = "Lucycan"
// const stringNameVariable = "Lucycan";
// console.log(stringNameVariable);
// ///2. const booleanVariable = true;
// const booleanVariable = true;
// console.log(booleanVariable);
// ///3. const null1 = null;
// const nullVariable = null;
// console.log(nullVariable);
// ///4. let undefinedVariable1;
// let undefinedVariable;
// console.log(undefinedVariable);
// ///5. const num = 44;
// const num = 44;
// console.log(num);
// ///6. const objVariable = {firstName: "Lucycan", lastName: "Ly"};
// const objVariable = {
//     firstName: "Lucycan",
//     lastName: "Ly"
// };
// console.log(objVariable);
///////////////////////////////////////////

/// function greeting return Hello World My name is Lucycan /// regular function, arrow/ scope

// function emptyFunction() {
//     return "This is an empty function";
// };

function emptyFunction() {
    return "this is an Empty Function"
};

const x = emptyFunction();
console.log(x);


// emptyFunction(); /// calling functions
// console.log(emptyFunction());


// function myFunction() {
//     const myArray = ["Hello World", "Lucycan", null, undefined, 44, {firstname: "Lucycan", lastName: "Ly"}];
//     return myArray;
// };
// const returnedValue = myFunction(); /// assign it to a variable
// console.log(returnedValue);
function myFunction() {
    const myArray = ["Hello World", "Lucycan", null,  undefined, 44, {firstName: "Lucycan", lastName: "Ly"}]
    return myArray;
};

const y = myFunction();
console.log(y);


// const myArrowFunction = () => { 
//     const myArray = ["Hello World", "Lucycan", null, undefined, 44, {firstname: "Lucycan", lastName: "Ly"}];
//     return myArray;
// };
// const y = myArrowFunction();
// console.log(y);

const myArrowFunction = () => {
    const myArray = ["Hello World", "Lucycan", null,  undefined, 44, {firstName: "Lucycan", lastName: "Ly"}]
    return myArray;

};
const z = myArrowFunction();
console.log(z);
console.log(z[1]);

console.log(`${z[0]} my name is ${z[1]}`);


// /// parameters and argutments
// const myArrowFunction1 = (parameter) => {
//     console.log(parameter);
//     const myArray = ["Hello World", "Lucycan", null, undefined, 44, {firstname: "Lucycan", lastName: "Ly"}];
//     console.log(myArray[1]); /// changing the value of index 1
//     myArray[1] = parameter;
//     console.log(myArray[1]);
    
//     return myArray;
// };

const myArrowFunction1 = (parameter) => {
    return parameter;
};

const a = myArrowFunction1();
console.log(a);

const b = myArrowFunction1("this argument could be anything");
console.log(b)

// const z = myArrowFunction1();
// console.log(z);

// const a = myArrowFunction1("Batman");
// console.log(a);
// console.log(`${a[0]} my name is ${a[1]} and I am ${num}`);
// ////////////////////////////////////////////////////////////////

/// What if you wanted a different name other than yourself 
///encapsulate in a function, call the function passing arguments(name, age, picture)

/// grab the element and assign it to a variable named aboutMe

    const aboutMeFunction = (name, age, picture) => {

        const aboutMe = document.getElementById("aboutMe");
        /// parageraph
        const paragraph = document.querySelector(".paragraph");
        console.log(paragraph); /// show the empty tag which is falsy
        
        aboutMe.addEventListener('click', function() { 
            const stringVariable = "Hello World";
            const stringNameVariable = name;
            const num = age;
            const imageSource = picture; 
            
            if(paragraph.innerText) {
                console.log("The paragraph already has text");
            }else {
                console.log(false);
                paragraph.innerText = `${stringVariable} my name is ${stringNameVariable} and I am ${num}`;
            }
    
            const img = document.querySelector(".img");
            img.src = imageSource;
        })
    };

    const c = aboutMeFunction("ChunLi", 23, "../assets/chunli.jpg" );
    const d = aboutMeFunction("Lucycan", 44, "../assets/longHairDontCare.jpg")

    const myFunctionArray = [c, d];
    console.log(myFunctionArray);
