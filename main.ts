// 1. Given the data below, define a type alias for representing users.

type Instructors = {
    name: string,
    age: number,
    company?: string
}

let users: Instructors[] = [ 
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

type Week = {
    day1: string,
    day2: string,
    day3: string,
    day4: string,
    day5: string,
    day6: string,
    day7: string
}

let days: Week = {
    day1: 'Monday',
    day2: 'Tuesday',
    day3: 'Wednesday',
    day4: 'Thursday',
    day5: 'Friday',
    day6: 'Saturday',
    day7: 'Sunday'
}

// console.log(days.day1)
// console.log(days.day2)
// console.log(days.day3)
// console.log(days.day4)
// console.log(days.day5)
// console.log(days.day6)
// console.log(days.day7)

// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {}

    printInfo = (): string => {
        return `Say hello to, ${this.firstName} ${this.lastName}`
    }
}

const daniel = new Person('Daniel', 'Amyx')
console.log(daniel.printInfo())

// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 

class Employee extends Person{
    constructor(
        firstName: string,
        lastName: string,
        public salary: number
    ){
        super(firstName, lastName)
    }
    
    printInfo = () => {
        return `${this.firstName} ${this.lastName} has a salary of ${this.salary} (and has consented to sharing this information)`
    }
}

const blaine = new Employee('Daniel', 'Amyx', 10000000)
console.log(blaine.printInfo())

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.

interface Address {     // tried adding address inside of User, that didn't work. Setting it beforehand and then setting the type to the interface is what worked.
    street: string,
    city: string,
    zipCode: number
}

interface User {
    name: string,
    salary: number,
    address: Address
}

let employee: User = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};
