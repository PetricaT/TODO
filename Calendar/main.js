debugMode == false;

if (debugMode == true){
// run setBackground on page load
window.onload = debugSetBackground;
}

function debugSetBackground() {
    var els = document.getElementsByTagName('*');
    //var chklst = document.getElementById('checklist');
    //chklst.style.background = '#fff';
    for(var i = 0; i < 3; i++){
        const random = Math.floor(Math.random() * els.length);
        els[random].style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
};