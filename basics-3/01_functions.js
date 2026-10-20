function sayMyName(){
    console.log("F");
    console.log("A");
    console.log("R");
    console.log("H");
    console.log("A");
    console.log("N");
}
// sayMyName();

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumber(number1,number2){
    // let result=number1+number2;
    // return result
    return number1+number2
}

// const result= addTwoNumber(3,6);
// console.log("Result: ",result);

function loginUserMessage(username="sam"){
    if (!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

function calculateCartPrice(val1, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200,300,500,2000));

const user={
    username: "Farhan",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); 
}

// handleObject({
//     username: "ram",
//     price: 99
// })

const myNewArray=[700,730,234,456];
function returnSecondValue(getArray){
    return getArray[getArray.length-1];
}

console.log(returnSecondValue(myNewArray)) 
