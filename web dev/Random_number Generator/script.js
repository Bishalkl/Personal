// declared a dom
const minimum = document.getElementById("minnumber");
const maximum = document.getElementById("maxnumber");
const sumbit = document.getElementById("submit");
const result = document.getElementById("result");

 // declare the value 
 let min = minimum.value;
 let max = maximum.value;

sumbit.onclick = function(){
     // declare the value 
    let min = parseInt(minimum.value);
    let max = parseInt(maximum.value);

    // condition
    if( !isNaN(min) && !isNaN(max) && max > min){
        let randomnum = Math.floor(Math.random() * (max - min +1)) + min;
        result.textContent = `The ouptut is ${randomnum}`;
    } else {
        result.textContent = `Please enter valid input`;
    }
};
