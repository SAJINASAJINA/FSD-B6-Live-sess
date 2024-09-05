// function
    A function in JavaScript is a reusable block of code designed to perform a specific task.Functions help you structure your code, making it modular, maintainable, and reusable.
    
Declaring and Calling a Function:


function display(name) {
  console.log("Hello, " + name + "!");
}

display("sajina"); 


// Function Declaration // Normal Function

// let a = 10

// function firstFunction() {
   // console.log('Nor fun');
   // console.log(a);
// }
// firstFunction()

//Arrow function es6:


// const arrFun = ()=> {
   // console.log("arrow function");
// }
// arrFun()

// const res = function (a, b) {
   // console.log(a,b);
// }
// res(10, 20); // a=10, b=20
IIFE:
(function() {
  console.log("This function runs immediately!");
})();

let a=10;
(function(){
    let a=20
    console.log(a);    
})();



// let x = 10;
    // (function () {
        // console.log("life");
       // let x = 100;
     //   console.log(x);
   // })(); // (function(){})();

// console.log(x);

//hof callback - asyn return
Higher - Order Function:
 
// function higherOrderfunction(callback) {
    // console.log("hof");
    // callback(); // dis
    // return function returnFunction() {
     //   console.log("return fun");
   // }
// }
// function dis() {
   //  console.log("function");
// }
// let result = higherOrderfunction(dis)
// result()
Callback Function:

,// y,z para
// function retFun (y,z){
    // console.log("return statement");
   // return y+z

// }

 // let val = retFun(50, 100) // call->value return 150
// console.log(val);


// console.log(retFun(50,100));

// function display() {
   // return 10;

// }

// let retVal = display()
   // console.log(retVal);
Basic If - Else Statement:

// let login = false

// if (login == true) {
   // console.log("log in successful"); // true block
//} else {
  //  console.log("invalid"); // false block
// }
If-Else If-Else Ladder:

// let proPrice = 1001;

// if (proPrice >= 1000) {
   // console.log("1000");
// } else if(proPrice>=900){
   // console.log("900");
// } else if (proPrice >= 800) {
   // console.log("800");
// } else {
   // console.log("below 800");
// }

Nested If - Else:

// let proPrice = 1050;
// if (proPrice >= 800) {
   // if (proPrice <= 1000) {
      // console.log("<=1000");
   // } else {
      // console.log(">1000");
   //}
// } else {
   // console.log("<800");
// }
Ternary Operator:

// syntax variable=(cond) ? true block : false block;
// let price = 69;

// const res = price > 50 ? "greater than 50" : "less than 50";
// console.log(res);

Switch Statement:

// let order = 3
// let msg;
// switch (order) {
   //case 1:
     // msg = 'I ordered laptop';
      
      //break;
   //case 2:
      //msg = 'I ordered burger';
      
      //break;
   //case 3:
     // msg = 'I ordered smartwatch';
      //break;
   
   //default:
     // msg = 'invalid';
//}
//console.log(msg);

 While Loop:
 
//let i = 0;
//while (i<=5) {
  // console.log("i=", i);
   //i++; //i+1
//}


Do while // exit check

//let i = 5;
//do {
   //console.log("i=", i)
  //    i--;
//} while (i>=0);  // 2>=0  1>=0  0>=0 -> false

 Basic For Loop:

//for -> real time
   
//for (let i=0; i<5; i++){
  //  console.log("i=", i);
//}

//0<5 ,1<5,2<5,3<5,4<5 //MRF map,reduce  ,filter,foreach



















