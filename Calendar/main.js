var debugMode = false;
const year = new Date().getYear();
const month = new Date().getMonth();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

if (debugMode) { window.onload = debugSetBackground; };

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function onLoad() {
    setMonth();
    console.log(name);
}


// Create a div for each day in the month
for (var i = 0; i < daysInMonth(month, year); i++) {
    // :v create a div with day number 
    // set the variable "day" as the createElement function for less typing
    var div = document.createElement('div');
    // searches for the container that holds the days and appends a empty div
    document.getElementById('days').appendChild(div);
    // gives the div the class of "day" and a unique id
    div.setAttribute("class", "day");
    div.setAttribute("id", "day-" + i + 1);
    // writes the day number inside the div
    document.getElementById('day-' + i + 1).innerHTML = i + 1;
}


function setMonth() {
    let name = months[month];
    document.getElementById("month").innerHTML = name;
}










// Fun stuff for debug
function debugSetBackground() {
    var els = document.getElementsByTagName('*');
    //var chklst = document.getElementById('checklist');
    //chklst.style.background = '#fff';
    for (var i = 0; i < 3; i++) {
        const random = Math.floor(Math.random() * els.length);
        els[random].style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
};

// When the page loads, execute function onLoad
document.onload = onLoad()