Hoisting & Scope in JavaScript
// Hoisting

//console.log(a);
//var a = 10;  //hoisting

//let b = 20
//const c = 22.5

//console.log(b);
//console.log(c);

//hoist()

//function hoist() {
    //let x=100
  //  console.log(x);
//}

// arrowFun()
//const arrowFun = () => {
    //console.log("arrow");
// }


// scope

//let a = 10  //global

//function scope() {
    //let b = 20 //function scope
    //console.log(a);
    //console.log(b);
//fun scope
// Local scope:
    //function nesFun() {
        //let c=20 //local scope
       // console.log(b);
     //   console.log(c);
   // }
  //  nesFun();

//}

//scope()
//console.log(a);
// console.log(b);
//nesFun()


//function top() {
   // console.log("top fun");
  //  function bottom() {
  //      console.log("bot fun");
  //  }
    //bottom()
//}


// how can i call bottom fun,outside of the top scope
//top()


//Arrays  in JavaScript


// Array:


//let arr = [100, 200, 300, 400, 500] //5
//console.log(arr.length);

//push pop:
push:

//arr.push(600)
//console.log(arr);
pop:

//arr.pop()
//console.log(arr);
unshift:

//arr.unshift(1000)
//console.log(arr);
shift:

//arr.shift()
//console.log(arr);

slice:

//const retSlice = arr.slice(1, 4) // 0-> 100  1-> 200  2-> 300 3-> 400 4-> 500
//console.log(retSlice);
 
//console.log(arr);

splice:


// splice add,remove,replace
//console.log(arr);

//const spliceRet = arr.splice(1, 3)

//console.log(spliceRet);

//console.log(arr);

//let arr1 = [1, 2, 3, 4, 5]
//arr1.splice(1,0,100)
//console.log(arr1);



//arr1.splice(2,1,7)
//console.log(arr1);

//for each


let looping = [100, 200, 300, 400, 500]
looping.forEach((item, index) => {
    
    console.log(item);
    console.log(index);

    console.log(`${index} = ${item}`);

    console.log("index=item");


 })
map:

const mapretArr=looping.map((item, index) => {
    console.log(item);
    console.log(index);
    return item*2
 })
console.log(mapretArr);

const rArr = looping.map(i => i * 2)
console.log(rArr);

const retArr = looping.map((item) => {
    if (item >= 300) { //  100 >= 300
        return item
    }
    return null
})

console.log(retArr);

filter:

console.log(looping);
const filReatArr = looping.filter(i => i > 300)
console.log(filReatArr);

//for of

let arrEx = [1, 2, 3, 4, 5]
for (let num of arrEx) {
    console.log(num);
    if (num > 2) {
    console.log(num);
}

}


//object and json iterationjson  -> itrate -> forEach and map


let person = {
    name: "sajina",
    age: 31,
    designation:"tally operator"
}

console.log(person);
console.log(person.name);
console.log(person.age);

console.log(Object.keys(person));
console.log(Object.values(person));

for (let key in person) {
    //console.log(person);
    console.log(key);
    console.log(`${key} = ${person[key]}`);
    

}

//json

const jsonData = [
    {
        name : "sajina",
        age: 31,
        designation:"tally operator"
    } , 

    { name : "shaleef",
    age: 10,
    designation:"sixth std"

        
    },
    { name : "shafik",
    age: 8,
    designation:"fourth std"

        
    }
]  // aaray of objects


jsonData.forEach((item) => {
    console.log(item.name);
    console.log(item.age);
    console.log(item.designation);

})
    
let result = jsonData.map((item) => {
    if (item.age > 9) {
        return item;
    }
    return null;
}).filter(item => item !== null)

console.log(result);








