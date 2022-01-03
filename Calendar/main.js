var debugMode = false;
const year = new Date().getYear();
const month = new Date().getMonth();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

if (debugMode) { window.onload = debugSetBackground; };

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

addEventListener('click', function (onClick) {
    var addTask = onClick.target.innerHTML;
    taskContent = getTaskContent();
    if (addTask == "+" && taskContent != undefined) {
        // APPEND TASK
        appendTask(taskContent);
    }
});

// Create a div for each day in the month
for (var i = 0; i < daysInMonth(month, year); i++) {
    j = i + 1;
    // :v create a div with day number 
    var div = document.createElement('div');
    // searches for the container that holds the days and appends a empty div
    document.getElementById('days').appendChild(div);
    // gives the div the class of "day" and a unique id
    div.setAttribute("class", "day");
    div.setAttribute("id", "day-" + j);
    // writes the day number inside the div
    document.getElementById('day-' + j).innerHTML = j;
}


function setMonth() {
    let name = months[month];
    document.getElementById("month").innerHTML = name;
}

function getTaskContent() {
    return document.getElementById("taskGenerator").value;
}

function appendTask(description) {
    var div = document.createElement('div');
    var label = document.createElement('label');
    var randNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

    var taskContainer = document.getElementById("checklist");
    taskContainer.appendChild(div);
    div.setAttribute('id', 'task-' + randNum);

    var randTask = document.getElementById('task-' + randNum);
    randTask.appendChild(label);
    label.setAttribute('class', 'b-contain');
    label.setAttribute('id', 'label-' + randNum);
    appendLabel(description, randNum);
}

function appendLabel(description, randNum) {
    var span = document.createElement('span');
    var input = document.createElement('input');
    var div = document.createElement('div');
    var randLabel = document.getElementById('label-' + randNum);
    randLabel.appendChild(span);
    randLabel.appendChild(input);
    span.innerHTML = description;
    input.setAttribute('type', 'checkbox');

    randLabel.appendChild(div);
    div.setAttribute('class', 'b-input');
}


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js');
    });
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

function onLoad() {
    setMonth();
}
// When the page loads, execute function onLoad
document.onload = onLoad()