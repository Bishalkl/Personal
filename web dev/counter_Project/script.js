// declare
const display = document.getElementById("display");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");

// value for change 
let count = 0;

// function for increase
increase.onclick= function(){
    display.textContent= count++;
}

// function for reset
reset.onclick= function(){
    count = 0;
    display.textContent = count;
}

// function for decrease
decrease.onclick= function(){
    display.textContent = --count;
}



