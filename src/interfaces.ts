// You can use interface to define a function not just a class
// type AddFn = (n1: number, n2: number) => number;

// this does the same as the above. A bit more rare prob do the above custom type in practice
interface AddFn {
    (n1: number, n2: number): number;
}

let fn: AddFn;
fn = (a: number, b: number) => {
    return a + b;
}

console.log(fn(1, 3));


interface Named {
    // you can use readonly modifier but none other. It has to be set once nad never changed
    readonly name?: string;
    outputName?: string; // this is an optional property that extending classes don't need to have
}

// Note you can do mulitple extend inheritance for interfaces unlike classes which you can only
// extend one
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
    public name?: string;

    constructor(public age: number, name?: string) {
        if (name) {
            this.name = name;
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(`${phrase} ${this.name}!`);
        } else{
            console.log('hi!');
        }
    }
}

let user1: Greetable;

user1 = new Person(36);


 user1.greet('hi there, I am');