// let a = "33"
// let b = "abc";

// let aInNum = parseInt(a);
// let bInNum = parseInt(b);


// console.log(typeof aInNum)
// console.log(typeof bInNum)

// console.log( aInNum)
// console.log( bInNum)


// let name = new String("atul");
// let lastName = "gupta"
// console.log(name);
// console.log(typeof name);
// console.log(lastName.toUpperCase());
// console.log(typeof lastName);
// console.log(lastName.search("p") == lastName.indexOf("p"));
// console.log(lastName.slice(2,3));
// console.log(lastName.split("p"));







// ++++++++++++++++++++++++   Date   +++++++++++++++++++++++++++++

// let date =  new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.getDay());



// ===============================  ARRAY  =======================

// console.log(Array.isArray("Atul"))
// console.log(Array.from("Atul"))
// console.log(Array.from({ name : "Atul"}))

// let a = 100
// let b = 200
// let c = 300
// console.log(Array.of(a,b,c))



// +++++++++++++++++++++++  OBJECT  +++++++++++++++


// object literals(non-singleton)
// let sym = Symbol("key");

// const jsUser = {
//     name : "Atul",
//     age : 20,
//     email : "atul@mail.com",
//     "full name": "atul gupta",
// }

// console.log(jsUser.email)
// console.log(jsUser["email"])

// // console.log(jsUser.full name)  // ese ye kaam nhi krega 
// console.log(jsUser["full name"])

// jsUser.name = "aditya"
// Object.freeze(jsUser)
// jsUser.age = 22;

// console.log(jsUser)


// singleton object


// const app = new Object();

// const obj1 = {1:"a" , 2 : "b"}
// const obj2 = {3:"c" , 4 : "d"}

// const obj3 = Object.assign({} , obj1 , obj2)
// const obj3 = {...obj1 , ...obj2 }
// console.log(obj3);

// app.name = "zomato"
// app.rating = "5"

// const {rating} = app
// console.log(app);
// console.log(app.rating);
// console.log(rating);
