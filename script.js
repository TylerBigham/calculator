 
const numNode = document.querySelectorAll('.number');
const display = document.querySelector('.output');

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
    console.log(number.id);
}));