/*
Type Casting: 
  Conversion of one type of data into other type

  1.Implicit conversion (Automatic conversion):
    It is called type coersion in js
    
 2.Explicit conversion (Manual conversion):
   1.String
   2.Number
   3.Boolean

   //Type coersion: When js automatically convert the types
*/
//String conversion --> Implicit conversion (type coersion)
console.log(".........String conversion............");

let num1 = "10"+20; //20 will coerse to string "20"
console.log(num1);//1020
console.log(typeof num1); //String+num = String

let num2 = 2+5+"10";// 2+5 = 7+"10" => 710
console.log(num2);//710 
console.log(typeof num2);//string

let num3 = 2+"10"+5; //concatination
console.log(num3);//2105
console.log(typeof num3);//string

let d1 = "Hi"+true;//true will be coersed to string
console.log(d1);//Hitrue
console.log(typeof d1);//string

//Number 
console.log("...........Number Coersion...........");
console.log("20"+"10"+20);//201020
console.log("20"-10);//"20" coersed to num // 20-10 = 10
console.log(typeof("20"-10));//number

console.log("100"*2);// 100*2=200
console.log(typeof("100"*2));//number

console.log("20"/"2");// 20/2 = 10
console.log(typeof("20"/"2"));//number

console.log("hi"*20);//NaN
console.log(typeof("hi"*20));//number

console.log("..................Explicit Conversion......................");
console.log("-----string to number-------");

let data ="200";
console.log(typeof data);//string
console.log(`value of data: ${data}`);//value of data: 200
console.log(data+200);//200200

//convert string to number
let res = Number(data);
console.log(res);//200
console.log(typeof res);//number
console.log(res+200);// 200+200 = 400

console.log(Number("Hi"));//NaN
console.log(Number(true));//1 
console.log(Number(false));//0
console.log(Number(null));//0
console.log(Number(undefined));//NaN

console.log("--------Number to String-------------")
/* Falsy values in Js:
False, null, "", undefined, NaN --> 0
*/
let num = 2000;
console.log(num);//2000
console.log(typeof num);//number
console.log(num+1000);//3000

let numToString = String(num); //converts num to string

console.log(numToString);//2000
console.log(typeof numToString);//string
console.log(numToString + 1000);//20001000

//string to number
console.log(numToString - 1000);//2000-1000=1000

console.log("--------------Boolean conversion-------------");

//Boolean type
/*
1.Truthy :
  Any value in boolean context represented as non zero no. and non empty string 
2.Falsy :
  Any value in boolean context represented as 0,"",Nan,undefined,false,null
*/
console.log("--------Truthy----------")
console.log(Boolean(90));//true
console.log(Boolean(-100));//true
console.log(Boolean("Jay"));//true
console.log(Boolean(true));//true
console.log(Boolean(78.888));//true

console.log("--------Falsy----------")
console.log(Boolean(0)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined));//false
console.log(Boolean(false));//false
console.log(Boolean(""));//false
console.log(Boolean(NaN));//false

/*
Test for any value is NaN (not a number)
*/
console.log(isNaN(1234));//false -> bcoz 1234 is number
console.log(isNaN("Hello"));//true -> bcoz "hello" is not a number
console.log(isNaN(0));//false -> 0 is number

//Loose Equality(==): It will automatically coversion
console.log("10" == 10);//true -> bcoz "10" converted automatically to number 10
 
//  Strict Equality(===): Tests as it is
console.log("10" === 10);//false -> bcoz "10" is considered as String









