var values = {
    num1: [],
    num2: [],
    numInt1: '',
    numInt2: '',
    operator: null,
    result: null,
    history: null
}

addEventListener('click', function(onClick){
        if(values.num1[0] == null){
            inputItem = onClick.target.innerHTML;
            if(inputItem <= 9){
                values.num1[0] = inputItem;
            };
        } else {
            inputItem = onClick.target.innerHTML;
            if(inputItem <= 9){
                // make number switch when operator is present
                if(values.num1[0] != null && values.operator == null){
                    values.num1.push(Number(inputItem))
                }                
                if(values.operator != null){
                    values.num2.push(Number(inputItem))
                }
            };
            if(inputItem == "+" || inputItem == "-" || inputItem == "/" || inputItem == "*"){
                values.operator = inputItem;
            } else if(inputItem == "C"){
                // CLEARS ALL REGISTRY
                values.num1 = [];
                values.num2 = [];
                values.numInt1 = '';
                values.numInt2 = '';
                values.operator = null;
            } else if(inputItem == "="){
                // r/theyDidTheMath
                values.numInt1 = Number(values.numInt1)
                values.numInt2 = Number(values.numInt2)
                if(values.operator == "+"){
                    values.result = values.numInt1 + values.numInt2;
                    values.history = `${values.numInt1} + ${values.numInt2}`;
                } else if(values.operator == "-"){
                    values.result = values.numInt1 - values.numInt2;
                    values.history = `${values.numInt1} - ${values.numInt2}`;
                } else if(values.operator == "*"){
                    values.result = values.numInt1 * values.numInt2;
                    values.history = `${values.numInt1} * ${values.numInt2}`;
                } else if(values.operator == "/"){
                    values.result = values.numInt1 / values.numInt2;
                    values.history = `${values.numInt1} / ${values.numInt2}`;
                }
                document.getElementById('result').innerHTML = values.result;
            }
                

    }
});

addEventListener('click', function(e){
    console.log(values)
    if(values.num1 != null && values.operator == null){
        values.numInt1 = [];
        for(var i = 0; i < values.num1.length; i++){
            values.numInt1 = values.numInt1 + values.num1[i]
        }
        document.getElementById('result').innerHTML = values.numInt1;
    } else if(values.num1 != null && values.operator != null && values.num2 != null && values.result == null) {
        values.numInt2 = [];
        for(var i = 0; i < values.num2.length; i++){
            values.numInt2 = values.numInt2 + values.num2[i]
        }
        document.getElementById('result').innerHTML = values.numInt1 + values.operator + values.numInt2;  
    } 
    document.getElementById('history').innerHTML = values.history;
});