/*
DataTypes: used to define type for data
Js support 2 types
1.Primitive
------------
1.Number
2.String
3.Boolean
4.Null
5.Undefined
6.BigInt
7.Symbol(not required)

2.Non-Primitive(everything as object)
---------------
1.Object
2.Array
*/

/*
Variables: Store data
------------
Keywords to declare variable:
1.var (older version)
2.let 
3.const

Js is dynamic check and loosely coupled lang
typeof operator: get the type of that data/object
*/

//1.Number: int/decimal digit
//--------------------------
let id = 1818;
console.log("Value is: "+id); //1818
console.log("Type of id is: "+typeof id); //number

let marks = 78.88;
console.log("Value is: "+marks); //78.88
console.log("Type of id is: "+typeof marks); //number


/*2.String
---------------------
1.single quote ''
2.double quote ""
3.back tick `` (or) template string (below esc button in keyboard : `)
*/
let fname = 'Jay';
let lname = "Nigade";
let username = `Sarang`;

console.log("First name is: "+fname);//Jay
console.log("Type of fname: "+typeof fname);//string

console.log("Last name is: "+lname);//Nigade
console.log("Type of lname: "+typeof lname);//string

console.log("username name is: "+username);//Sarang
console.log("Type of username: "+typeof username);//string
 
//template string `` back tick

// let info = "My name is Merin,
// my qualification is BE.I am ISTQB certified tester."; -->Here,using string"" whole info cannot be stored

let trainer="Merin", //multiple variable of same let type stored together
qualification="BE",
years=2,
certificate="ISTQB";

let info = `My name is ${trainer}, 
 my qualification is ${qualification}.I am ${certificate} certified tester.`; //Here using back tick we can store huge data 
 console.log(info);
 //Here, instead of Merin replace with var name using ${}

//3.Boolean
//-----------
//1.True  2.False

let isActive = true;
console.log(`value is: ${isActive}`); //value is: true
console.log(`type of: ${typeof isActive}`); //type of: boolean 

let currentStatus = false;
console.log(`value is: ${currentStatus}`); //value is: false
console.log(`type of: ${typeof currentStatus}`);//type of: boolean 

//4.undefined: variable is declared but not initialized, by default value and type will be undefined
//-------------------------------
let num; //Only declared not initialized
console.log(`value is: ${num}`); //undefined
console.log(`type of num: ${typeof num}`); //undefined

//5.null --> unknown / not a value
//----------------------
let value = null;
console.log(`value is: ${value}`); //null
console.log(`type of value: ${typeof value}`);//type of value: object -->known bug

//6.BigInt --> big integer value
//-----------------------
//max value for int: 
console.log(Number.MAX_VALUE);//1.7976931348623157e+308

let bigNum = 79769313486231578888888888888n; //add n at last then it becomes bigint
console.log(`value is: ${bigNum}`); //79769313486231578888888888888
console.log(`type is: ${typeof bigNum}`); //bigint

//7.Symbol(not required)
let newSymbol = Symbol('id');
console.log(newSymbol); //Symbol(id)
console.log(typeof newSymbol); //symbol

// Non-Primitive data type(everything as object)
// ---------------
// 1.Object
// 2.Array

//1.Object 
//---------- Object Literal---------
let person = {
    id: 101,
    fname: "Sarang",
    email: "merin@gmail.com"
}
console.log(person);//{ id: 101, fname: 'Sarang', email: 'merin@gmail.com' }
console.log(typeof person);//object

//how to get details from object
console.log(`person id is: ${person}`);//person id is: [object Object]
console.log(`person firstname is: ${person.fname}`);//person firstname is: Sarang




