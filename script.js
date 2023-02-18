 
const numNode = document.querySelectorAll('.number');
const display = document.querySelector('.output');
const clear = document.querySelector('#clear');
const operand = document.querySelectorAll('.operator');
const addition= document.querySelector('#plus');
const subtraction = document.querySelector('#minus');
const multiplication = document.querySelector('#multipy');
const division = document.querySelector('#divide');
const equals = document.querySelector('#equals');
var switchDisplay = 'on';
var variableTwo = 0;
var math = 'plus'; 


numNode.forEach(number => number.addEventListener('click', () => {
    if (switchDisplay === 'on'){
        switchDisplay = 'off'
        display.textContent = '';
    }
    if (math === 'equals'){
        display.textContent = '';
        math = "plus";
        variableTwo = 0;
    }
    display.textContent += number.id;
}));

operand.forEach(operator => operator.addEventListener('click', () => {
    if (math === 'equals'){
        display.textContent = '0';
        switchDisplay = "on";
        math = 'plus';
    }
    variableTwo = operate(math, variableTwo, parseFloat(display.textContent));
    variableOne = parseFloat(display.textContent);
    math = operator.id;
    display.textContent = "0";
    switchDisplay = 'on';
    if (math === 'equals'){
        display.textContent = variableTwo;
    }
}))

clear.addEventListener('click', () => {
    variableOne = 0;
    variableTwo = 0;
    math = 'plus';
    display.textContent = '0';
    switchDisplay = "on";
})


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
    if (operand === "plus" ) {
        return add(numOne,numTwo);
    }else if (operand === "minus" ){
        return subtract(numOne,numTwo);
    }else if (operand === "multiply" ){
        return multiply(numOne,numTwo);
    }else if (operand === "divide" ){
        if (divide(numOne, numTwo) % 1 != 0){
            return Math.round((divide(numOne, numTwo) + Number.EPSILON) * 100) / 100;
        }    
        return divide(numOne,numTwo);
    }
}

