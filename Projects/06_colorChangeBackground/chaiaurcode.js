const randomColor=()=>{
    const hex="0123456789ABCDEF"
    let colour="#"
    for (let i=0;i<6;i++){
        colour+=hex[Math.floor(Math.random()*16)]
    }
    return colour;
}

let validInterval;
const startChangingColour=()=>{
    if (!validInterval){
        validInterval=setInterval(changeBackgroundColour,800)
    }
    function changeBackgroundColour(){
        document.body.style.backgroundColor=randomColor()
    }
}
const stopChangingColour=()=>{
    clearInterval(validInterval)
    validInterval=null
}

document.getElementById("start").addEventListener("click",startChangingColour)

document.getElementById("stop").addEventListener("click",stopChangingColour)