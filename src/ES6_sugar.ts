// const userName = 'Rob';
// let age = 36;

// age = 37;

// const add = (a: number, b: number = 2) => a + b;
// console.log(add(2, 5));
// console.log(add(2));

// const printOutput = (output: string | number) => console.log(output);
// printOutput('hello');
// printOutput(14);



// Spread operator 
// On Arrays
const hobbies = ['Sports', 'Cooking', 'Fishing', 'Coding'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

// On Objects 

const person = {
    firstName: "Rob",
    age: 36
};
// A perfect copy of each of the key / value pairs.
const copiedPerson = { ...person }
person.age = 37;

console.log(person);
console.log(copiedPerson);


// Rest parameters 

const add = (...numbers: number[]) => {
   return numbers.reduce((curResult, curValue) => {
       return curResult + curValue;
   });
};
console.log(add(1, 2, 3, 4, 5));

// With tuples allows us to do the same but only specifiy a varying param list with a max of eg 3 
// const add = (...numbers: [number, number, number]) => {
//     return numbers.reduce((curResult, curValue) => {
//         return curResult + curValue;
//     });
//  };
// console.log(add(1, 2, 3));


// Array and Object Destructuring
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

// OR with destructuring
const [hobby1, hobby2, ...remainingHObbies] = hobbies;

console.log(hobby1, hobby2, remainingHObbies);

// Object Destructuring 
const { age, firstName: userName } = person;  // this : is purely a JS thing its aliasing JS 
console.log(userName, age);