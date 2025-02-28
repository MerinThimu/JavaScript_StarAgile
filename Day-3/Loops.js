
/*
1.for loop:
  No.of iterations are known (calendar,list/menu/dropdown)

2.while loop:
  Entry control loop. No.of iteration not known use this.

3.do while:
  Exit control loop. One time execution, whatever condn
*/
console.log("-----------for loop----------");

//Print hello 5 times
for(let i=1;i<=5;i++)
{
    console.log("Hello");
 }
 //Hello
// Hello
// Hello
// Hello
// Hello

//Print 1 to 10
for(let i=1;i<=10;i++)
{
    console.log(i);
} //1 to 10

//Reverse 10 to 1
for(let i=10;i>=1;i--)
{
    console.log(i);
}//10 to 1

//Even no upto 10
for(let i=1;i<=10;i++)
{
    if(i%2==0)
    console.log("Even number"+i);
}
// Even number2
// Even number4
// Even number6
// Even number8
// Even number10

/* for(;;)                 //DO NOT run this bcoz it will run infinite time
 {
     console.log("Hi");
 }*/

 console.log("-----------while loop-------------")    

 //Print welcome 10 times
let i=1;
while (i<=10)
{
    console.log("welocme!"); //welcome 10 times
    i++;
}

//sum of natural nos till 100 -> 1+2+4+....+100
let num=1,sum=0;
while (num<=100)
{
 sum=sum+num;
 num++;   
}
console.log("sum of 100 natural nos are: "+sum); //sum of natural nos are: 5050

//factorial of 5 -> 5**4*3*2*1
let fact = 1;
for(let n=5;n>=1;n--)
{
 fact = fact*n;
}
console.log("Factorial for 5 is: "+fact);//Factorial for 5 is: 120

console.log("-----------do while-----------");
//One time execution if condn is true or false

let a = 1;
do
{
    console.log("Bye all!"); 
    a++; //a=2
}while(a>=10); //2>=10 -> condn false
//o/p: Bye all!
 
let b = 1;
do
{
    console.log("Bye all!"); 
    b++; //b=2
}while(b<=10); //2<=10 -> condn true
//o/p: Bye all!-> 10 times
