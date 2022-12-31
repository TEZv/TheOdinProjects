const container = document.querySelector('.container');
const input = document.querySelector('.input');
const submit = document.querySelector('#button-submit');
const reset = document.querySelector('#button-reset');
const color = document.querySelector('#fav-color');
const rainbow = document.querySelector('#rainbow');
const shadowing = document.querySelector('#shadowing');
let colorHere = color.addEventListener('input', takeColor);
let rainbowMod = rainbow.addEventListener('change', makeRainbow);
let strength = shadowing.addEventListener('change', makeStrength);
const SQUARE = 640000;
let rainbowModCheck = false;
let strengthModCheck = false;
let intValue = 16;
let opacityValue = [];

defaultGrid();

function defaultGrid() {
    container.innerHTML = '';
    for (let i = 0; i < 256; i++) {
        let baby = document.createElement('div');
        baby.classList.add('pixel')
        container.appendChild(baby);
        baby.setAttribute('id', `${i}`);
    }
    listenAfterSizeChanged();
}

submit.addEventListener('click', e => {
    e.preventDefault(); 
    gridMaker();
});

reset.addEventListener('click', e => {
    e.preventDefault();
    gridMaker();
});

function gridMaker() {
    let input = document.getElementById('textbox');
    if (input.value) {
        intValue = Number(input.value);
        if (intValue < 100 && 0 < intValue) {
            resizeField(intValue);
            document.getElementById('textbox').value = '';
        } else {
            resizeField(16);
        }
    } else {
        resizeField(intValue);
    }
}