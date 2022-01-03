var debugMode = false;
const year = new Date().getYear();
const month = new Date().getMonth();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var addTaskBtn = document.getElementById('addTask');
var taskContainer = document.querySelector("#taskContainer");

if (debugMode) { window.onload = debugSetBackground; };

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

addEventListener('keydown', function (e) {
    taskContent = getTaskContent();
    if (e.key == "Enter" && taskContent != "") {
        appendTask(taskContent);
    }
});


addTaskBtn.addEventListener('click', function (onClick) {
    var addTask = onClick.target.innerHTML;
    taskContent = getTaskContent();
    if (addTask == "+" && taskContent != "") {
        // APPEND TASK
        appendTask(taskContent);
    }
});

taskContainer.addEventListener('click', function (e) {
    divID = e.path[2];
    console.log(divID);
    var check = e.altKey;
    if (check) {
        divID.style.textDecoration = 'line-through';
        divID.style.color = "#aaaaaa";
    } else {
        divID.style.textDecoration = 'none';
        divID.style.color = "#ffffff";
    };
});

// Create a div for each day in the month
for (var i = 0; i < daysInMonth(month, year); i++) {
    j = i + 1;
    var div = document.createElement('div');
    // search for the day type and append to corresponding collumn
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


// All of this to make the task button add tasks via a template
function getTaskContent() {
    return document.getElementById("taskGenerator").value;
}

// The function that starts creating the template
function appendTask(description) {
    var div = document.createElement('div');
    var label = document.createElement('label');
    var randID = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;

    var taskContainer = document.getElementById("taskContainer");
    taskContainer.appendChild(div);
    div.setAttribute('id', randID);

    var randTask = document.getElementById(randID);
    randTask.appendChild(label);
    label.setAttribute('class', 'b-contain');
    label.setAttribute('id', 'label-' + randID);
    appendLabel(description, randID);
    document.getElementById("taskGenerator").value = "";
    return randID;
}

// The continuation of the previous function but within 
// ONLY the label scope of the template
function appendLabel(description, randID) {
    var span = document.createElement('span');
    var input = document.createElement('input');
    var div = document.createElement('div');
    var randLabel = document.getElementById('label-' + randID);
    randLabel.appendChild(span);
    randLabel.appendChild(input);
    span.innerHTML = description;
    input.setAttribute('type', 'checkbox');

    randLabel.appendChild(div);
    div.setAttribute('class', 'b-input');
}

// registers the service worker proxy thing so the page can be made into an desktop/android APP (works offline too)
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