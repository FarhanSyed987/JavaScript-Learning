const form=document.querySelector("form")
form.addEventListener("submit",function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    const results=document.querySelector("#results")
    if (height==="" || height<0 || isNaN(height)){
        results.innerHTML="Please give a valid height"
    }
    else if (weight==="" || weight<0 || isNaN(weight)){
        results.innerHTML="Please give a valid weight"
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`<span>${bmi}</span>`;

        if (bmi<18.6){
            document.querySelector("#underweight").style.color="green";
            document.querySelector("#underweight").style.padding="12px";
            document.querySelector("#underweight").style.backgroundColor="white";
        }
        else if (bmi>18.6 && bmi<24.9){
            document.querySelector("#normalweight").style.color="green";
            document.querySelector("#normalweight").style.padding="12px";
            document.querySelector("#normalweight").style.backgroundColor="white";
        }
        else{
            document.querySelector("#overweight").style.color="green";
            document.querySelector("#overweight").style.padding="12px";
            document.querySelector("#overweight").style.backgroundColor="white";
        }
    }
})