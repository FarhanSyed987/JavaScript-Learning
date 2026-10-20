const array1=[1,2,3,4]
// const initialValue=0;
// const sumWithInitial=array1.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// },0)


const myTotal=array1.reduce((acc,curr)=>acc+curr,0)
// console.log(myTotal);


const shoppingCart=[
    {
        iteamName: "js course",
        price: 999
    },
    {
        iteamName: "java course",
        price: 1999
    },
    {
        iteamName: "data science course",
        price: 2999
    }
]

const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0) 
console.log(priceToPay);
