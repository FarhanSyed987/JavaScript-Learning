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
            const underweight=document.querySelector("#underweight")
            underweight.style.color="green";
            underweight.style.padding="12px"
            underweight.style.backgroundColor="white"
        }
        else if (bmi>18.6 && bmi<24.9){
            const normalweight=document.querySelector("#normalweight")
            normalweight.style.color="green";
            normalweight.style.padding="12px"
            normalweight.style.backgroundColor="white"
        }
        else{
            const overweight=document.querySelector("#overweight")
            overweight.style.color="green";
            overweight.style.padding="12px"
            overweight.style.backgroundColor="white"
        }
    }
})