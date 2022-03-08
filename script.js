let mathCalc = document.querySelectorAll(".primitive");
for (let number of mathCalc) {
    document.addEventListener("click", showTheMath);
}

function showTheMath(numberCalc) {
    let resultText = document.querySelector(".calculating").innerHTML
   document.querySelector(".calculating").innerHTML = `${resultText}${numberCalc.target.id}`
}

function calc() {
    let stringToCalc = document.querySelector(".calculating").innerHTML
    //eval abaixo interpreta a string como numeros e operadores e retorna o resultado
    document.querySelector(".result").innerHTML = eval(stringToCalc)
    document.querySelector(".calculating").innerHTML = eval(stringToCalc)
}

function cleanMath() {
    document.querySelector(".result").innerHTML = ''
    document.querySelector(".calculating").innerHTML = ''
}

function calculate() {
    //Estudar sobre regex conforme expressão abaixo: (stringToCalc.match(/[*]/g) || []).length;
    let stringToCalc = document.querySelector(".calculating").innerHTML
    let multiply = (stringToCalc.match(/[*]/g) || []).length;
    let plus = (stringToCalc.match(/[+]/g) || []).length;
    let divide = (stringToCalc.match(/[/]/g) || []).length;
    let minus = (stringToCalc.match(/[-]/g) || []).length;
    if (plus > 0 || multiply > 0 || divide > 0 || minus > 0) {
        document.querySelector(".result").innerHTML = eval(stringToCalc)
        document.querySelector(".calculating").innerHTML = eval(stringToCalc)
    }
}

let calculatingString = document.querySelector(".calculating").innerHTML
let resultString = document.querySelector(".result").innerHTML

if(calculatingString.length > 15){
    calculatingString.splice(15)
    console.log(calculatingString)
}

