document.title = "button";

let person = {
    firstName: "John", ///key: value
    lastName: "William",
    age: 18 ,
    gender: "female" ,
    ethnicity: "Martian",
    job: "Therapist",
    
    greeting: function() {
        console.log(
            `Hello World, My name is ${this.firstName} and I am ${this.age}. I am the ${this.job}`
            )
        }
    };
    
    console.log(person.firstName.toLocaleLowerCase())
    // person.greeting();

    let btn = document.getElementById('btn');
    console.log(btn);
    btn.addEventListener("click", function() {
        console.log("test");
    });
