alert("Welcome")
var fname = prompt("Please enter your first name")
var lname = prompt("Please enter your last name")
var age = prompt("Please enter your age in numerical figures")
var height = prompt("Please enter your height in cm in numbers")
var petname = prompt("Please enter your pet name")

var nameck = null
var ageck = null
var htck = null
var ptck = null

if (fname[0] === lname[0])
{
    nameck = 1;
}

if (age>20 && age<30)
{
    ageck = 1;
}

if (height >= 170)
{
    htck = 1;
}

if (petname[petname.length - 1] == "y")
{
    ptck = 1;
}

if (nameck && ageck && htck && ptck)
{
    console.log("You are a spy caught here!")
}
else
{
    console.log("Nothing for you to see")
}


