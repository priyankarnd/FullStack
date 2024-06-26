// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(name)
    {
        roster.push(name)
    }

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
function remove(name)
    {   
        var isinlist = roster.includes(name);
        if (isinlist)
        {
            pos = roster.indexOf(name);  //Get index of element
            roster.splice(pos,1); //Remove element(index, no. of elements)
        }
    }

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display()
    {
        console.log(roster);
    }


// Start by asking if they want to use the web app
var perm = prompt("Do you want to use the web app? Reply y or n")

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
while (perm == 'y'){
    //console.log("Running");

    var action = prompt("What do you want to do? type: add, remove, display or quit");
    
    if (action == 'add')
    {
        var student = prompt("What name would you like to add?");
        addNew(student);
    }
    else if (action == 'remove')
    {
        var student = prompt("What name would you like to remove?");
        remove(student);
    }
    else if (action == 'display')
    {
        display();
    }
    else if (action == 'quit')
    {
        break;
    }
}

