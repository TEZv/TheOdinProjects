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

function resizeField (inputInt) {
    container.innerHTML= '';
    let size = Number(Math.sqrt(SQUARE / Math.pow(inputInt, 2))).toFixed(5);
    container.classList.remove('default');
    for (let i = 0; i < Math.pow(inputInt, 2); i++) {
        let baby = document.createElement('div');
        baby.classList.add('pixel');
        baby.setAttribute('id', `${i}`);
        baby.style.width = `${size}px`;
        baby.style.height = `${size}px`;
        container.appendChild(baby);
        }   
    listenAfterSizeChanged();
}

function listenAfterSizeChanged () {
    const pixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixel.length; i++) {
        opacityValue[i] = 0.1;
    }
    pixel.forEach(e => e.addEventListener('mouseover', changeColor));
}
function changeColor(e) {
    if (strengthModCheck) {
        if (e.target.style.backgroundColor) {
            opacityValue[e.target.id] += 0.1;
            let temp = parseFloat(opacityValue[e.target.id]).toFixed(1);
            if (temp <= 1.0) {
                e.target.style.backgroundColor = addAlpha(takeColor(), temp); 
            }        
        } else {
            e.target.style.backgroundColor = addAlpha(takeColor(), 0.1);
        }   
    } else {
        e.target.style.backgroundColor = setFinalColor();
    }
}

function takeColor() {
    return color.value;
}

function makeRainbow() {
    if (this.checked) {
        rainbowModCheck = true; 
    } else {
        rainbowModCheck = false;
    }
}

function makeStrength() {
    if (this.checked) {
        strengthModCheck = true;
        rainbow.disabled = true;
    } else {
        strengthModCheck = false;
        rainbow.disabled = false;
    }
}

function setFinalColor() {
    let color = '';
    if (rainbowModCheck && !strengthModCheck) {
        color = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
        return color;
    } else {
        color = takeColor();
        return color;
    }
}

function addAlpha(color, opacity) {
    let opacityPercent = Math.round(Math.max(opacity || 1) * 255);
    return color + opacityPercent.toString(16);
}