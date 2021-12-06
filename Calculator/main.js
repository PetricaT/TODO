var clicked = [undefined, null]; // Global variable to store the last clicked button

addEventListener('click', function(onClick){
    console.log(clicked)
    if(clicked[0] == undefined){
        clicked[0] = onClick.target.innerHTML;
    } else {
        var temp = clicked[0];
        clicked[0] = onClick.target.innerHTML;
        clicked[1] = temp;
    }
});

addEventListener('click', function(e){
    console.log(clicked)
    document.getElementById('result').innerHTML = clicked[0];
    document.getElementById('history').innerHTML = clicked[1];
});