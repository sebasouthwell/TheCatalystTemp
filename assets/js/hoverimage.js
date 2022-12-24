"use strict";
function teamContent(obj,inside){
    if (inside){
        obj.children[0].classList.add("show-class");
    }
    else{
        obj.children[0].classList.remove("show-class");
    }
}