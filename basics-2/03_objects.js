
const mySym=Symbol("key1");

const JSUser={
    name: "Farhan",
    "full name": "Syed Hasan Farhan",
    [mySym]: "mykey1",
    age: 19,
    location: "Durgapur",
    email: "hasanfarhan0987@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser["full name"]);
// console.log(JSUser[mySym]);

// JSUser.age=98;
// Object.freeze(JSUser);
// JSUser.age=45;
// console.log(JSUser.age);

// console.log(JSUser);

JSUser.greeting=function(){
    console.log("hello my farhan");
}
JSUser.find=function(){
    console.log(`Hello ${this["full name"]}`);
    
}

console.log(JSUser.find());
