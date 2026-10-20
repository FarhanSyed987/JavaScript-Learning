// const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     // console.log(item);
//     return item; 
    
// })

// console.log(values ); 

// const myNums=[1,2,3,4,5,6,7,8,9,10]
// // const newNums=myNums.filter((num)=>{
// //     return num%2===0; 
// // })
// // console.log(newNums);

// const newNums=[]
// myNums.forEach((num)=>{
//     if (num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);



const books=[
    {title: "Book One",genre: "Fiction", publish: 1991, edition: 2004},
    {title: "Book Two",genre: "Non-Fiction", publish: 1961, edition: 2014},
    {title: "Book Three",genre: "Fiction", publish: 2009, edition: 2021},
    {title: "Book Four",genre: "History", publish: 2007, edition: 2020},
    {title: "Book Five",genre: "Non-Fiction", publish: 1967, edition: 2002},
    {title: "Book Six",genre: "Fiction", publish: 2001, edition: 2012},
    {title: "Book Seven",genre: "History", publish: 1982, edition: 1998},
]

// const UserBook=books.filter((book)=>book.genre==="History")

const UserBook=books.filter((book)=>book.publish>2000 && book.genre==="History" )
console.log(UserBook);
