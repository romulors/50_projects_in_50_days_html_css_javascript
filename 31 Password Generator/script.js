const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateButtonElement = document.getElementById('generate');
const clipboardElement = document.getElementById('clipboard');

const randomFunction = {
    lower : getRandomLowercase,
    upper : getRandomUppercase,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardElement.addEventListener('click', (event) => {
    if(!resultElement.innerText)
        return;

    const text = document.createElement('textarea');
    text.value = resultElement.innerText;
    text.select();
    text.setSelectionRange(0, +lengthElement.value);
    navigator.clipboard.writeText(text.value);
    alert('Password copied to clipboard!');
});

generateButtonElement.addEventListener('click', () => {
    const length = +lengthElement.value;
    const hasUpper = uppercaseElement.checked;
    const hasLower = lowercaseElement.checked;    
    const hasNumber = numbersElement.checked;
    const hasSymbol = symbolsElement.checked;

    resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArray = [{lower}, {upper}, {number}, {symbol}]
        .filter(item => Object.values(item)[0]);

    if(typesCount === 0) 
        return '';

    for(let i = 0; i < length; i++){
        const randomFunc = Math.floor(Math.random() * typesArray.length);
        const funcName = Object.keys(typesArray[randomFunc])[0];
        generatedPassword += randomFunction[funcName]();
    }

    return generatedPassword;
}

function getRandomLowercase() {
    return String.fromCharCode (
        Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercase() {
    return String.fromCharCode (
        Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode (
        Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = "!@#$%¨&*()_+-=[]{};:~^/\|¢¬£";
    return symbols[Math.floor(Math.random() * symbols.length)];
}