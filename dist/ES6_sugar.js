"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var hobbies = ['Sports', 'Cooking', 'Fishing', 'Coding'];
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
var person = {
    firstName: "Rob",
    age: 36
};
var copiedPerson = __assign({}, person);
person.age = 37;
console.log(person);
console.log(copiedPerson);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    });
};
console.log(add(1, 2, 3, 4, 5));
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHObbies = hobbies.slice(2);
console.log(hobby1, hobby2, remainingHObbies);
var age = person.age, userName = person.firstName;
console.log(userName, age);
//# sourceMappingURL=ES6_sugar.js.map