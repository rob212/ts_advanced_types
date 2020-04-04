// interface Admin {
//     name: string;
//     priviliges: string[];
// };


// interface Employee {
//     name: string;
//     startDate: Date;
// };

// interface ElevatedEmployee extends Employee, Admin {};

// const e1: ElevatedEmployee = {
//     name: 'Rob',
//     priviliges: ['create-server'],
//     startDate: new Date()
// }


// OR - this uses intersection operator '&' create a type as an combiniation of multiple other types

type Admin = {
    name: string;
    priviliges: string[];
};


type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee =  Employee & Admin;

const e1: ElevatedEmployee = {
    name: 'Rob',
    priviliges: ['create-server'],
    startDate: new Date()
}

console.log(e1);