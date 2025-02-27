
//Arithmetic Operators
let a = 10,b=15;

console.log("Addition: "+(a+b));//Addition: 25
console.log(`Subtraction: ${(a-b)}`); //Subtraction: -5
console.log(`Multiplication: ${(a*b)}`); //Multiplication: 150
console.log(`Division: ${(a/b)}`); //Division: 0.6666666666666666
console.log(`Modulus: ${(a%b)}`); //Modulus: 10

console.log(90/0);//Infinity -> allowed
console.log(-90/0);//-Infinity 
console.log("hi"/0);//NaN -> Not a Number
console.log(0/0);//NaN

//String + (concatination)
console.log("10"+10);//1010

/*
Increment Operator :                      Decrement Operator:
1.Post increment : a++                    1.Post decrement : b--
2.Pre increment  : ++a                     2.Pre decrement : --b
*/
let a1=100;
console.log(a1);//100
console.log(a1++);//100 --> Post increment
console.log(a1);//101 

let x = 90;
let y = x++; //value will assign 1st then increment--> Post increment
console.log(x); //91
console.log(y); //90

let b1=200;
console.log(b1);//200
console.log(++b1);//201 --> Pre increment
console.log(b1);//201

let p = 145;
let q = ++p;//--> Pre increment
console.log(p); //146
console.log(q); //146


//Decrement:
let m = 88;
let n = m--; //Post Decrement
console.log(m);//87
console.log(n);//88

let i=689;
let j= --i; //Pre Decrement
console.log(i);//688
console.log(j);//688

/*Relational Operators
----------------------
1.<
2.>
3.>=
4.<=
5.!= not equalto

Equality:
---------
1.Strict equality -> ===
2.Loose equality -> ==

example:
--------
p=q=146 m=187 n=188 i=j=688

*/
console.log(p>i);//false
console.log(p>=q);//true
console.log(i>=m);//true
console.log(i!=n);//true
console.log(j>n);//true
console.log(p>m);
console.log(m<n);//true

//Loose equality -> ==
console.log(i==j);//true
console.log("10" == 10);//true

//Strict equality -> === (recommended to use)
console.log("10" === 10); //false

//Logical Operators:
//1.And &&      2.Or ||       3.Not !

console.log("............Logical Operators........")
// //example:
// p=q=146 m=187 n=188 i=j=688

//1.AND && --> both should be true
console.log((p==q) && (i==j));//true
console.log((p==q) && (i<j));//false
console.log((p>q) && (i==j));//false
console.log((p!=q) && (i!=j));//false

//2.OR || --> any one should be true
console.log((p==q) || (i==j));//true
console.log((p==q) || (i<j));//true
console.log((p>q) || (i==j));//true
console.log((p!=q) || (i!=j));//false

//3.Not ! --> opposite of result
console.log(p==q); //true
console.log(!p==q);//false

//Interview Qs
console.log(null == undefined);//true
console.log(null === undefined);//false

console.log(false+1);//1    //true=1, false=0 ,null = unknown
console.log(true+1);//2
console.log(null+1);//1
console.log(undefined+100);//NaN
console.log(true+true);//2
console.log(true+false);//1
console.log(" "+10);// 10 
console.log(false === null);//false


