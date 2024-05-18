var r = document.querySelector('#restart_button')
var t = document.querySelectorAll("td")

//Clear the squares with restart button

function clearsquare()
{
    for (var i =0; i < t.length; i++)
        {
            t[i].textContent = '';
        }
}

r.addEventListener('click',clearsquare)

//Function to make the game
function gameplay()
{
    if (this.textContent === '')
        {
            this.textContent = 'X';
        }
    else if (this.textContent === 'X')
        {
            this.textContent = 'O';
        }
    else if (this.textContent === 'O')
        {
            this.textContent = '';
        }
}

// Replicate the function in squares
for (var i =0; i < t.length; i++)
    {
        t[i].addEventListener('click',gameplay);
    }