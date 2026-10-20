const tinderUser=new Object()
tinderUser.id="123abc"
tinderUser.name="Farhan"
tinderUser.isLoggedIn=false
// console.log(tinderUser); 
 
const regularUser={
    email: "hasanfarhan0987@gmail.com",
    fullname: {
        userfullname: {
            firstname: "farhan",
            lastname: "syed"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.lastname);


const obj1={1: "a",2: "b"}
const obj2={3: "c",4: "d"}
// const obj3=Object.assign({},obj1,obj2) //do {} when multiple obj like obj1,obj2,obj3 to put in same obj


const obj3={...obj1,...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course={
    coursename: "JS",
    price: "Rs 999",
    teacher: "farhan"
}

// course.teacher
const {teacher: sir}=course;
console.log(sir);


// {
//     "name": "farhan",
//     "coursename": "JS in hindi",
//     "price": "free"
// } 