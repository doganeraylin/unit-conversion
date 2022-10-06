// store variables

const inputField = document.querySelector('input');
const convertBtn = document.querySelector('button');
const meterFeetContainer = document.querySelector('.meter-feet')
const literGallonContainer = document.querySelector('.liter-gallon')
const kiloPoundContainer = document.querySelector('.kilo-pound')


// round numbers

function roundNum (num) {
    return Math.round(num*100)/100
}


// meter to feet

function convertMeterFeet () {

    let inputValue = inputField.value;

    const meter = roundNum(inputValue / 3.281)
    const feet = roundNum(inputValue * 3.281)

    meterFeetContainer.innerHTML = `
    <p class="output">${inputValue} meters = ${feet} feet  | ${inputValue} feet = ${meter} meters </p>`
}

// liter to gallon

function convertLiterGallon () {
   
    let inputValue = inputField.value;

    const gallon = roundNum(inputValue / 3.785)
    const liter = roundNum(inputValue * 3.785)

    literGallonContainer.innerHTML = `
    <p class="output">${inputValue} liters = ${gallon} gallon  | ${inputValue} gallon = ${liter} liters </p>`
}

// kilo to pound

function convertKgPound () {
   
    let inputValue = inputField.value;

    const kilo = roundNum(inputValue / 2.205)
    const pound = roundNum(inputValue * 2.205)

    kiloPoundContainer.innerHTML = `
    <p class="output">${inputValue} kilos = ${pound} pounds  | ${inputValue} pounds = ${kilo} kilos </p>`
}


// button event listeners

convertBtn.addEventListener('click', convertMeterFeet)
convertBtn.addEventListener('click', convertLiterGallon)
convertBtn.addEventListener('click', convertKgPound)
