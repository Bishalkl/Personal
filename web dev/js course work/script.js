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


// document.getElementById("click").onclick = function(){
//     let Username = document.getElementById("username").value;
//     document.getElementById("Output").textContent = Username;
// }


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

// var are limited to block scope{}
// let are variables are limited to a function(){}

// global variable = is declared outside any function
// (if global, var will change browser's indo properties)
// let is good to use in both global variable 

// template literials

// string method
// let username = "Bishal koirala";
// let phonenumber = "9811014480";
// console.log(username.length);

// console.log(username.charAt(0));
// console.log(username.indexOf("O"));
// console.log(username.lastIndexOf("o"));
// console.log(username.trim());
// console.log(username.toLowerCase());
// console.log(username.toUpperCase());

// phonenumber = phonenumber.replaceAll("","-");
// console.log(phonenumber);

// slice method in string
// let firstName;
// let lastName;

// firstName = username.slice(0,6);
// lastName = username.slice(7,14);
// console.log(firstName);
// console.log(lastName);
// console.log(username.slice(0,username.indexOf(" ")));
// console.log(username.slice(username.indexOf(" ") + 1));

// method chaining = calling one method after another in one continuous line of code
// let username = "bro";

// let letter = username.charAt(0).toUpperCase().trim();

// console.log(letter);

// ternary operator = shortcut for an 'if/else statement' Takes a 3 operands

// 1.a condition with?
// 2. expression if True:
// 3. expression if False

// // conndition ? exprIfTrue: exprIFFalse
// let number = checkEven(23);
// console.log(number);

// function checkEven(num){
//     return num % 2 == 0 ? `The give number ${num} is even.` : `The given number ${num} is Odd.`;
// }

// format currency
// toLocaleString() = returns a string with a language sensitive representation of this

// number.toLocaleStrinng(locale, {options});

// 'locale' = specify that language (undefined = default)
// 'option' = object with formatting options

// let mycurrency = 12647363.4;
// let mypercent = 100;

// mycurrency = mycurrency.toLocaleString("ne-NP", {style: "currency", currency: "NPR"});
// mypercent = mypercent.toLocaleString(undefined, {style: "unit", unit: "celsius"});
// console.log(mycurrency);
// console.log(mypercent);

// task is to make number guessing game tommorow !important
// task is to make temprature conveter !important



