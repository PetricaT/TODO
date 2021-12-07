var values = {
    num1: [],
    num2: [],
    numInt1: '',
    numInt2: '',
    operator: null,
    result: null,
    history: null
}
var showRes = false;

function fullClear() {
    // CLEARS ALL REGISTRY
    values.num1 = [];
    values.num2 = [];
    values.numInt1 = '';
    values.numInt2 = '';
    values.operator = null;
    values.result = null;
    showRes = false;
}

function softClear() {
    values.num2 = [];
    values.numInt2 = '';
    values.result = null;
    values.operator = null;
    showRes = false;
}

function show_image() {
    var img = document.createElement("img");
    img.src = "./intruder.jpg";
    img.alt = "intruder";

    document.body.appendChild(img);
}

function calculate() {
    values.numInt1 = Number(values.numInt1);
    values.numInt2 = Number(values.numInt2);
    if (values.operator == "+") {
        values.result = values.numInt1 + values.numInt2;
        values.history = `${values.numInt1} + ${values.numInt2}`;
    } else if (values.operator == "-") {
        values.result = values.numInt1 - values.numInt2;
        values.history = `${values.numInt1} - ${values.numInt2}`;
    } else if (values.operator == "*") {
        values.result = values.numInt1 * values.numInt2;
        values.history = `${values.numInt1} * ${values.numInt2}`;
    } else if (values.operator == "/") {
        values.result = values.numInt1 / values.numInt2;
        values.history = `${values.numInt1} / ${values.numInt2}`;
    }
    if (showRes == true) {
        if (values.result % 1 != 0) {
            document.getElementById('result').innerHTML = values.result.toFixed(5);
        } else {
            document.getElementById('result').innerHTML = values.result;
        }
    }
}

//* IF YOU USE KEYBOARD, THIS ACTIVATES
addEventListener('keydown', function (event) {
    if (values.num1[0] == null) {
    inputItem = event.key;
        if (inputItem <= 9) {
            values.num1[0] = inputItem;
        }
        console.log(inputItem);
    } else {
        inputItem = event.key;
        if (inputItem <= 9) {
            // make number switch when operator is present
            if (values.operator == null) {
                values.num1.push(Number(inputItem));
            }
            if (values.operator != null) {
                values.num2.push(Number(inputItem));
            }
            console.log(inputItem);
        };
        if (inputItem == "+" || inputItem == "-" || inputItem == "/" || inputItem == "*") {
            values.operator = inputItem;
        }
        if (inputItem == "C" || inputItem == "c") {
            fullClear()
        }
        if (inputItem == "=" || inputItem == "Enter") {
            // r/theyDidTheMath
            showRes = true;
            calculate();
        }
    }
});
 
//* IF YOU USE MOUSE, THIS ACTIVATES
addEventListener('click', function (onClick) {
    if (values.num1[0] == null) {
        inputItem = onClick.target.innerHTML;
        if (inputItem <= 9) {
            values.num1[0] = inputItem;
        };
    } else {
        inputItem = onClick.target.innerHTML;
        if (inputItem <= 9) {
            // make number switch when operator is present
            if (values.operator == null) {
                values.num1.push(Number(inputItem));
            }
            if (values.operator != null) {
                values.num2.push(Number(inputItem));
            }
        };
        if (inputItem == "+" || inputItem == "-" || inputItem == "/" || inputItem == "*") {
            values.operator = inputItem;
        }
        if (inputItem == "CE") {
            fullClear()
        }
        if (inputItem == "=") {
            // r/theyDidTheMath
            showRes = true;
            calculate();
        }
    }
});

//* IF YOU USE MOUSE, THIS ACTIVATES
addEventListener('click', function (e) {
    // Write out number 1
    if (values.num1 != null && values.operator == null) {
        values.numInt1 = '';
        for (var i = 0; i < values.num1.length; i++) {
            values.numInt1 = values.numInt1 + values.num1[i]
        }
        document.getElementById('result').innerHTML = values.numInt1;
    }
    // Write out number 2 
    else if (values.operator != null && showRes == false) {
        values.numInt2 = '';
        for (var i = 0; i < values.num2.length; i++) {
            values.numInt2 = values.numInt2 + values.num2[i]
        }
        document.getElementById('result').innerHTML = values.numInt1 + values.operator + values.numInt2;
        if(values.numInt1 == "69" && values.numInt2 == "420" && values.operator == "/"){
            show_image();
        }
    }
    // Write out of result exists
    else if (values.result != null && values.operator != null) {
        fullClear();
    }
    document.getElementById('history').innerHTML = values.history;
});

//* IF YOU USE KEYBOARD, THIS ACTIVATES
addEventListener('keydown', function (e) {
    // Write out number 1
    if (values.num1 != null && values.operator == null) {
        values.numInt1 = '';
        for (var i = 0; i < values.num1.length; i++) {
            values.numInt1 = values.numInt1 + values.num1[i]
        }
        document.getElementById('result').innerHTML = values.numInt1;
    }
    // Write out number 2 
    else if (values.operator != null && showRes == false) {
        values.numInt2 = '';
        for (var i = 0; i < values.num2.length; i++) {
            values.numInt2 = values.numInt2 + values.num2[i]
        }
        document.getElementById('result').innerHTML = values.numInt1 + values.operator + values.numInt2;
        if(values.numInt1 == "69" && values.numInt2 == "420" && values.operator == "/"){
            show_image();
            fullClear();
        }
    }
    // Write out of result exists
    else if (values.result != null && values.operator != null) {
        fullClear();
    }
    document.getElementById('history').innerHTML = values.history;
});

//? Multiple event listeners can be added using this 
/*  ES6 ONLY
['click','ontouchstart'].forEach( evt => 
    element.addEventListener(evt, function(e){

    });
);
*/
//? Very good code