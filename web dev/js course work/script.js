// // // // console.log(`Hello world`);
// // // // // window.alert(`This is an alert`);

// // // // // how to use it to html
// // // document.getElementById("myh1").textContent="Hello";
// // // document.getElementById("myp").textContent="my name is bishal koirala."

// // // let x = 12;
// // // let y = 12;
// // // console.log(`Value of x is ${x} and Value of y is ${y}.`);
// // // console.log(typeof x);
// // // console.log(typeof y);


// // let fullname = "Bishal koirala";
// // let age = 21;
// // let isstudent = true;

// // document.getElementById("name").textContent = `My name is ${fullname}.`;
// // document.getElementById("age").textContent = `My age is ${age}.`;
// // document.getElementById("check").textContent = `I am student id ${isstudent}.`;

// // // How to accept user input

// // // 1. Easy way = window prompt
// // // 2. Professional way = html textbook

// let username = window.prompt("What is your name?");
// console.log(`My name is ${username}.`);


document.getElementById("click").onclick = function(){
    let Username = document.getElementById("username").value;
    document.getElementById("Output").textContent = Username;
}


// // const = a variable that can't be changed
// const PI = 3.14159;
// let radius;
// let circumference;
// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius)

// circumference = 2 * PI * radius;
// document.getElementById("radius").textContent = `Area of the circle is ${circumference}.`


// math object in javascript 
// let x = 3.21;
// let y = 2;
// let z;

// z = Math.floor(x); // it will help to remove the decimal numer
// console.log(z)

// maximum value and minimum value 
// let x = 12;
// let y = 23;
// let z = 21;

// let max = Math.max(x,y,z)
// let min = Math.min(x,y,z)

// console.log(max, min)

// Random Number Generator
// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() * (max-min)) + min;
// console.log(randomNum)

// task is to make a random number generator
