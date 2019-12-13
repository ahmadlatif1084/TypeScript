export {}
let message = 'Hello World';
console.log(message);

// Declaration

let x = 10;
const y = 20;

let sum;
const title = 'Codevolution';

// Data Type
let isBeginner :boolean = true;
let total:number = 0;
let name:string = 'Vishwas';

let sentence: string = `My name is ${name}
I am a begginner in Typescript`;
console.log(sentence);

let n:null = null;
let u: undefined = undefined;

let isNew:boolean = null;
let myName:string=undefined;

let list1:number[] = [1,2,3];
let list2:Array<number> = [1,2,3];
let person1:[string,number] = ['M Ahmed',22];

enum Color {Red,Green,Blue};
let c:Color = Color.Green;
console.log(c);

// Types

let randomValue:any = 10;
randomValue = true;
randomValue = 'Ahmed Latif';

let myVariable:any = 10;
let myVariable1:unknown = 10;

console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();

function hasName(obj:any): obj is { name:string }{
 return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}
if(hasName(myVariable1)){
    console.log(myVariable1.name);
}

(myVariable1 as string).toUpperCase();

// Types inference & Union Type

let a;
a=10;
a=true;

let b=20;

let multiType:number | boolean;
multiType = 20;
multiType = true;

let anyType:any;
anyType = 20;

// Using Types Functions
// Default Parameters

function add(num1:number,num2:number = 10) :number {
    if(num2)
    return num1 + num2;
    else
    return num1;
}
add(3,2);
add(5);

// Interface


interface Person{
    firstName:string,
    lastName:string
};
function fullName(person:Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName:'Bruce',
   lastName:'Wayne'
};

fullName(p);

// Classes

class Employee{
    public employeeName:string;

    constructor(name:string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('M Ahmed');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
    constructor(managerName:string){
        super(managerName);
    }
    delegateWork(){
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('S Rizwan');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
