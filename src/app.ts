// Type Guards

type Combinable = string | number;

function adder(a: Combinable, b: Combinable) {
  // This use of typeof is a category of type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// A second type of guarding is to use the in JS keyword but this involves passing a string representation
// of the property you are looking for.
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  // Can't use typeof here as both Employee and Admin are just 'object
  // Can't use typeOf 'Employee' as the typeof only runs at runtime and is actually javascript
  // which has zero concept of the Employee or Admin Type

  // in is a JS feature which checks at runtime if the property as a string exists
  if ("priviliges" in emp) {
    console.log(`Priviliges: ${emp.priviliges}`);
  }

  if ("startDate" in emp) {
    console.log(`StartDate: ${emp.startDate}`);
  }
}

const e3: Admin = {
  name: "Cameron",
  priviliges: ["update", "read", "write"],
};
printEmployeeInformation(e3);

// To prove this if we create a fake employee object on the fly it only prints the properties it has
printEmployeeInformation({ name: "Gary", startDate: new Date() });

// Another type of guarding is to use the instanceOf which reduces the risk of typo's in your string
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log(`loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // This is a JS feature that is able to determine if vehicle was created via the truck constructor
  // This can't be used for Interfaces only for classes.
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

// Discriminted Union
// using a property usually 'type' or 'kind' to allow for a type of guard
// this works well with interfaces.

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
  console.log(`Moving speed: ${speed}`);
}

moveAnimal({type: 'bird', flyingSpeed: 10});


// Type Casting 
// have to tell TS that its not null and its specific type
// const userInputElement = <HTMLInputElement> document.getElementById('user-input');  OR 
const userInputElement = document.getElementById('user-input') as HTMLInputElement;

userInputElement.value = 'Hi there!';



// Index Types 

interface ErrorContainer {
    // { email: 'Not a valid email', username: 'must start with character'};
    [prop: string]: string;
}

// Now I have a variable number of key value props, so long as they are string types.
const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Does not start with a character'
}


// Function Overlaods
// Allow us to use same name function with different types

function addTogether(a: number, b: number): number;
function addTogether(a: string, b: string) : string;
function addTogether(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const res = addTogether('Rob', 'McBryde');
// here TS know this is of type string and uses the overridden function to ensure it infers that res is of type string 
// and therefore knows I can use the split()
console.log(res.split(' '));



// Optional Chaining
// if we are missing data and we don't know for certain all the data will exist
// lets say for some users we don't always have a job for each user
const fetchedUserData = {
    id: 'u1',
    name: 'John',
    job: { title: 'CEO', description: 'My own company'}
};
// wil only print this if the data is not undefined. If it is it will not continue
// basically its an if check 
console.log(fetchedUserData?.job?.title);

// Nullish Coalescing 
// same as optional chaining but for null as well as undefined
const userInput = '';

// this works but will also kick in if the string is empty '' 
// use ?? for this nullish coalescing 
// IF ITS NOT null or undefined then use else use the fallback.
const storedDate = userInput ?? 'DEFAULT';

console.log(storedDate);
