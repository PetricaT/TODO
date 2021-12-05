var stack = [];
var num1 = [];
var num2 = [];
var operand;

addEventListener('click', function(e){
    var click = e.target.innerHTML;
    stack.push(click)
    if(click == "="){
        console.log(stack)
        for(var i = 0; i < stack.length; i++){
            if(stack[i+1] < 10){
                stack[i] = stack[i] + stack[i+1];
                
            }
            console.log("Num1: " + num1)
        }
    }
    if(click == "C"){
        for(var i = 0; i < stack.length+10000; i++){
        stack.pop();
        }
    }
});