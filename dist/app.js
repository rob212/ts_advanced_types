"use strict";
var _a;
function adder(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("priviliges" in emp) {
        console.log("Priviliges: " + emp.priviliges);
    }
    if ("startDate" in emp) {
        console.log("StartDate: " + emp.startDate);
    }
}
var e3 = {
    name: "Cameron",
    priviliges: ["update", "read", "write"],
};
printEmployeeInformation(e3);
printEmployeeInformation({ name: "Gary", startDate: new Date() });
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving...");
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("loading cargo... " + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log("Moving speed: " + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
var userInputElement = document.getElementById('user-input');
userInputElement.value = 'Hi there!';
var errorBag = {
    email: 'Not a valid email',
    username: 'Does not start with a character'
};
function addTogether(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var res = addTogether('Rob', 'McBryde');
console.log(res.split(' '));
var fetchedUserData = {
    id: 'u1',
    name: 'John',
    job: { title: 'CEO', description: 'My own company' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
var userInput = '';
var storedDate = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedDate);
//# sourceMappingURL=app.js.map