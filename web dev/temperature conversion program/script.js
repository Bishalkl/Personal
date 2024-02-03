// declare
const Value = document.getElementById("number");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const subbtn = document.getElementById("submit");
const display = document.getElementById("display");

// function for calculate celsius
function calcCelsius(){
    let c = (parseInt(Value.value)-32) * 5 / 9;
    return display.textContent = `The value is ${c.toLocaleString(undefined, {style: "unit" , unit:"celsius"})}.`;
};

// function for calculate fahrenheit
function calcfahrenheit(){
    let c = (parseInt(Value.value)) * (9 / 5) + 32;
    return display.textContent = `The value is ${c.toLocaleString(undefined, {style:"unit", unit:"fahrenheit"})}.`;
};


// function for click button
subbtn.onclick = function(){
    // condtion
    if(celsius.checked == true && !(isNaN(Value.value))){
        calcCelsius();
    } else if(fahrenheit.checked == true && !(isNaN(Value.value))){
        calcfahrenheit();
    } else {
        display.textContent = "Please Enter a valid degree.";
    }
    
};

