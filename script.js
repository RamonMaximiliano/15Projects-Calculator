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

window.addEventListener("keydown", doTheJob);

function doTheJob(keyboardPressed) {
    console.log(keyboardPressed.key)
    let keyboard = keyboardPressed.key
    if (keyboard == '1' || keyboard == '2' || keyboard == '3' || keyboard == '4' || keyboard == '5' || keyboard == '6' || keyboard == '7' || keyboard == '8' || keyboard == '9' || keyboard == '0') {
        let alreadyCalc = document.querySelector(".calculating").innerHTML
        document.querySelector(".calculating").innerHTML = `${alreadyCalc}${keyboard}`
    } else if (keyboard == 'Enter') {
        calc()
    } else if (keyboard == '/' || keyboard == '*' || keyboard == '-' || keyboard == '+') {
        let stringToMath = document.querySelector(".calculating").innerHTML
        let multiply = (stringToMath.match(/[*]/g) || []).length;
        let plus = (stringToMath.match(/[+]/g) || []).length;
        let divide = (stringToMath.match(/[/]/g) || []).length;
        let minus = (stringToMath.match(/[-]/g) || []).length;
        console.log(multiply, plus, divide, minus)
        if (plus > 0 || multiply > 0 || divide > 0 || minus > 0) {
            document.querySelector(".result").innerHTML = eval(stringToMath)
            document.querySelector(".calculating").innerHTML = `${eval(stringToMath)}${keyboard}`
        } else {
            let calculated = document.querySelector(".calculating").innerHTML
            document.querySelector(".calculating").innerHTML = `${calculated}${keyboard}`
            console.log(`${calculated}${keyboard}`)
        }
    }
}



