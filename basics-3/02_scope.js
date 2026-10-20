let a=10
const b=20
var c=90 

if (true){
    let a=70
    const b=40
    var c=7
}

// console.log(a);
// console.log(b);
// console.log(c);
 



function one(){
    const username="farhan"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

// if (true){
//     const username="farhan"
//     if (username==="farhan"){
//         const website=" youtube"
//         console.log(username+website);
//     }
//     // console.log(website);
// }

// console.log(username);


console.log(addone(7));


function addone(num){
    return num+1;
}


const addTwo=function(num){
    return num+2;
}

console.log(addTwo(7)) ;
