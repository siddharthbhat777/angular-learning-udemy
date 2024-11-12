/*
    Primitives: number, string and boolean
    complex types: array and object
    others: function, parameters
*/

// Primitives
let age: number;
age = 24;

let userName: string;
userName = 'Sid';

let isInstructor: boolean;
isInstructor = false;

// Complex types
let hobbies: string[];
hobbies = ['Video games', 'Comics'];

let person: {
    name: string;
    age: number;
}; // setting object inner data types

person = {
    name: 'Sid',
    age: 24
};

let people: {
    name: string;
    age: number;
}[]; // declaring structure of array of objects

// Type inference
let fullName = 'Siddharth Bhat'; // if value is initialized at the time of declaration, TypeScript automatically assign a datatype of value to that variable
// Note: so here defining variable (let fullName: string = 'Siddharth Bhat') with mentioning data type is redundant and bad practice.
fullName = 'Shanya Bhat'; // only string is allowed

// Union type
let course: string | number = 'Angular Course'; // basically you mention types you want to allow while re-assigning values with different data-types
course = 24;
// course = true; // this won't work

// Type alias
let subjects1: { name: string; views: number } | { name: string; views: number }[]; // this is repetitive

// setting alias
type Subject = { name: string; views: number };

let subject2: Subject | Subject[]; // good approach

// Manually setting function return type
function demoFun(a:string, b:number): number | string {
    if (isNaN(parseInt(a))) {
        return a + b;
    }
    return parseInt(a) + b;
}

// Explicitly specifying default data types
function print(value: any): void { // if no data type specified, it will be any by default
    console.log(value);
    // Note: if no return statement added it will be void by default
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) { // now typescript have info that both parameters must be of same type
    const newArray = [value, ...array];
    return newArray;
}

insertAtBeginning([1, 2, 3, 4], 5); // will work with no problem
insertAtBeginning(['a', 'b', 'c'], 'd'); // will work as well
// insertAtBeginning([1, 2, 3, 4], 'a'); // won't work
// insertAtBeginning(['a', 'b', 'c'], 1); // won't work as well

// Classes
class Student {
    // Lengthy way
    /* firstName: string;
    lastName: string;
    age: number;
    private courses: string[]

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    } */

    // Short way
    constructor(
        public firstName: string, 
        public lastName: string, 
        public age: number, 
        private courses: string[]
    ) {}

    enrol(courseName: string) { // this is method with any random name as enrol
        this.courses.push(courseName)
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Sid', 'Bhat', 24, ['Angular']);
student.enrol('React');
// student.courses // won't work
student.listCourses();

// Interfaces
interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'Sid',
    age: 24,
    greet() {
        console.log('Hello!');
    },
};

// Interfaces mainly used to declare structure of classes
class Instructor implements Human {
    firstName: string;
    age: number;

    greet() {
        console.log('Hello!');
    }
}