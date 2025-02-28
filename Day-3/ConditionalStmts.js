

/*
1.Simple if (true)
2.If-else (true/false)
3.LadderIf (Multipe cond'n validation)
4.Nested If (Multipe cond'n validation)
5.Switch case (Multipe cond'n validation)
*/
console.log("---------Simple if demo-----------");

//year validation
let year = 2025;
if(year === 2025)
{
    console.log("True!This is current year: "+year);//True!This is current year: 2025
}

year = 2026;
if(year === 2025)
    {
        console.log("True!Year match "+year);//It will not enter since false cond'n
    }
console.log("done"); //For false Condition this is printed

console.log("-----------If-else condition------------");
//age validation for voting
let age = 20;
if(age>=18)
{
    console.log("user is adult, can vote!"); //For true condn this is printed
}
else
{
    console.log("user cannot vote!");//For false condn this is printed
}

console.log("-----------LadderIf condition------------");

let num = 0;
if(num>0)
{
    console.log(num+" is positive");
}
else if(num<0)
{
    console.log(num+" is negative");
}
else
{
    console.log("number is 0");//number is 0
}

console.log("-----------Browser validation------------------");

let bname = "safari";
if(bname === "chrome")
{
    console.log("Test executing on "+bname);
    
}
else if(bname === "edge")
{
    console.log("Test executing on "+bname);
}
else if(bname === "firfox")
{
    console.log("Test executing on "+bname);
}
else
{
    console.log("Wrong browser!"+bname);//Wrong browser!safari
}
console.log("---------------Nested if----------------");

let marks = 90;
if(marks>=90)
{
    if(marks>=95)
    {
        console.log("A++");
    }
    else
    console.log("A");//A
}
else
console.log("B");

//Switch case
console.log("-------------Switch case----------");
//traffic scenario key == value

let color = "black";
switch (color) {
    case "red": console.log("Stop!");
        break;                        //Break : will exit from loop/switch body
    case "green": console.log("Go!");
        break;
    case "yellow": console.log("Ready!");
        break;
    default: 
               console.log("wrong color");//wrong color
        break;
}

//Role validation with access

let role = "user";
switch (role) {
    case "admin": console.log("Admin can access everything");
         break;
    case "veiwer": console.log("Veiwer can have read only access");
         break;
    case "editor": console.log("Editor can edit everything");
         break;
    default:   console.log("No access");//No access
        break;
}

