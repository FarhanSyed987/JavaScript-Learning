// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    //named IIFE
    console.log(`DB connected`);
    
})();

// chai()

( (name)=>{
    console.log(`DB connected Two ${name}`);
})("farhan");

let num1=9;
let num2=8;

function addTwo(num1,num2){
	return num1+num2;
}

console.log(addTwo(num1,num2));
