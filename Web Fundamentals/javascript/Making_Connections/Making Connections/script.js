var element=document.querySelector("#do");
var dede=document.querySelector("#count");
var dojo=document.querySelector("#frog");
var counter = 2;
var counter1 = 418;
function acceptuser1(){
    element.remove();
    counter --;
    counter1 ++;
    dede.innerText=counter;
    dojo.innerText=counter1;
}

var elem=document.querySelector("#add");
var dede=document.querySelector("#count");
var dojo=document.querySelector("#frog");
var counter = 2;
var counter1 = 418;
function acceptuser2(){
    elem.remove();
    counter --;
    counter1 ++;
    dede.innerText=counter;
    dojo.innerText=counter1;

}

var ele=document.querySelector("#newname");
function changeme(){
    ele.innerText=("Hi");

}


