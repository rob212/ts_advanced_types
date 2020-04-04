"use strict";
var fn;
fn = function (a, b) {
    return a + b;
};
console.log(fn(1, 3));
var Person = (function () {
    function Person(age, name) {
        this.age = age;
        if (name) {
            this.name = name;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name + "!");
        }
        else {
            console.log('hi!');
        }
    };
    return Person;
}());
var user1;
user1 = new Person(36);
user1.greet('hi there, I am');
//# sourceMappingURL=interfaces.js.map