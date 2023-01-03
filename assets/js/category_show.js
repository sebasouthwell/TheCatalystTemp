"use strict";
var elements = null;
window.onload = function(){
    elements = document.getElementById("categories").children;
}
function category_show(value=null){
    let i = 0;
    for (i; i < elements.length; i++){
        if (value != null && !elements[i].children[0].innerHTML.includes(value)){
        elements[i].hidden = true;
    }
    else{
     elements[i].hidden = false;   
    }}
}