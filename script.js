
let mathCalc = document.querySelectorAll(".primitive");
for (let number of mathCalc){
    document.addEventListener("click", showTheMath);
}


function showTheMath(numberCalc){
    let resultText = document.querySelector(".calculating").innerHTML
    document.querySelector(".calculating").innerHTML = `${resultText}${numberCalc.target.id}`
    console.log(numberCalc.target.id)
}

function calc(){
    let stringToCalc = document.querySelector(".calculating").innerHTML
    console.log(stringToCalc)    
    document.querySelector(".result").innerHTML = eval(stringToCalc)
}

function cleanMath(){
    document.querySelector(".result").innerHTML = ''
    document.querySelector(".calculating").innerHTML = ''
}