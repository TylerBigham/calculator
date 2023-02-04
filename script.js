 
const numNode = document.querySelectorAll('.number');
const display = document.querySelector('.output');
const clear = document.querySelector('#clear');
const add= document.querySelector('#plus');
const subtract = document.querySelector('#minus');
const multiply = document.querySelector('#multipy');
const divide = document.querySelector('#divide');
const equals = document.querySelector('#equals');


function add(addOne, addTwo){
    return addOne + addTwo;
}

function subtract(subOne, subTwo){
    return subOne - subTwo;
} 

function multiply(multOne, multTwo){
    return multOne * multTwo;
}

function divide(divOne, divTwo){
    return divOne / divTwo;
}

function operate(operand, numOne, numTwo) {
    if (operand === "+" ) {
        return add(numOne,numTwo);
    }else if (operand === "-" ){
        return subtract(numOne,numTwo);
    }else if (operand === "*" ){
        return multiply(numOne,numTwo);
    }else if (operand === "/" ){
        return divide(numOne,numTwo);
    }
}

numNode.forEach(number => number.addEventListener('click', () => {
    display.textContent += number.id;
}));

clear.addEventListener('click', () => {
    display.textContent = "0";
})