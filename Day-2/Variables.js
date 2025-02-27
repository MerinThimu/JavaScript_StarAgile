/*
Varaible: Name of storage location where data is stored
Keyword : var (older)
          let(new)
          const(new)
 1.var:
 * Scope: Functional and global scope
 * Redeclaration allowed
 
 2.let:
 * Scope: Blocked scope + global
  * Redeclaration  not allowed 
  * blocked scope
  * {
     }
  *variables are mutable( values can be changed)  

 3.const:
 * Scope: 
 * Redeclaration not allowed
 * variables are immutable( values can not be changed) 
*/

//Global variables
var fname = "Jay"; //var
let id = 101;      //let
const email = "jay@gmail.com"; //const

console.log("............calling from global scope...................");
console.log(`fname is: ${fname}`);
console.log(`id is: ${id}`);
console.log(`email is: ${email}`);

function show()
{
    console.log("..........calling global data from functional scope.............");
    console.log(`fname is: ${fname}`);
    console.log(`id is: ${id}`);
    console.log(`email is: ${email}`);
}
show();//call function

//Local variable : Any variable declared within function, and has scope which is functional
//             and can be accessed within function only
function display()
{
    let uname = "Sarang";
    var marks = 90;
    const pi = 3.14;
    console.log(`username is: ${uname}`);
    console.log(`marks is: ${marks}`);
    console.log(`pi is: ${pi}`);
}
display();//call function

//console.log(`username is: ${uname}`); //Reference error: uname is not defined
//console.log(`marks is: ${marks}`); //Reference error: marks is not defined
//console.log(`pi is: ${pi}`); //Reference error: pi is not defined

//BLock Scope: let
console.log("...........Blocked Scope...........");
if(true)
{
    let bname = "chrome";
    var bversion = 113;
    console.log(`browser name:  ${bname}`); //browser name:  chrome
    console.log(`browser version: ${bversion}`); //browser version: 113
}
//console.log(`browser name: ${bname}`);//ReferenceError: bname is not defined
console.log(`browser version: ${bversion}`); //browser version: 113

//Redeclaration about Variable
var x;
console.log(x);//undefined : becz not initialized
let y;
console.log(y);//undefined
const z=100;
console.log(z);//100 : value must be declared and initialized

//1.var declaration -> we get updated data
var data = "Testing";
var data = "Programming";
console.log(data); //Programming

//2.let -> re-declaration not allowed, but re-assign allowed
  let testData = "chrome";
//let testData = "edge"; //re-declaration not allowed
      testData = "Firefox"; //re-assign allowed
console.log(testData); //Firefox

//3.const ->re-declaration not allowed, re-assign not allowed
  const value = "IsFinal";
//const value = "test"; //re-declaration not allowed
//      value = "test"; //re-assign not allowed
console.log(value); //IsFinal

console.log("--------constant variable------------");
const cname = "Park";
console.log(cname);

console.log("...........Hoisting............");

//1.var:
console.log(num1);//undefined -> allowed
var num1 = 1818;
console.log(num1);//1818

//2.let:
// console.log(num2);//ReferenceError: Cannot access 'num2' before initialization -> not allowed
 let num2 = 9090;
 console.log(num2);//9090

 //3.const:
//console.log(num3);//ReferenceError: Cannot access 'num3' before initialization-> not allowed
const num3 = 1010;
console.log(num3);//1010

//*Hoisting allowed to funct'n declarat'n:

add(); //"calling add fn"
function add() //fn declaration
{
    console.log("calling add fn");
}
add();//"calling add fn"

//*Hoisting not allowed for fn expression:
//1.Anonymous fn:

//sum(); //ReferenceError: Cannot access 'sum' before initialization
let sum = function()
{
  console.log("Calling sum fn");
}
sum(); //"Calling sum fn"