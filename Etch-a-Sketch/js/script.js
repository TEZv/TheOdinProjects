// number of rows / columns in grid
let gridSize = 24;

const container = document.querySelector('.grid-container');

let bgColor = '#ffffff';
container.style.backgroundColor = bgColor;

//create new grid items to fill the grid
function createGrid() {
  // having the grid with each item at 1fr would leave left over space at the end of the grid
  //  when there were lots of items, doing it this way seemed to fill in that extra space.
  // however the grid broke when there were 3 or less items, so the if statment fixes that
  let gridWidth = container.offsetWidth / gridSize;
  container.style.gridTemplateColumns = `repeat(${gridSize - 3}, ${gridWidth}px) 1fr 1fr 1fr`;
  container.style.gridTemplateRows = `repeat(${gridSize - 3}, ${gridWidth}px) 1fr 1fr 1fr`;
  if (gridSize < 4) {
    container.style.gridTemplateColumns = `repeat(${gridSize},1fr`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr`;
  }

    for (let i = 0; i < gridSize ** 2; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-item');
    square.setAttribute('draggable', 'false');
    square.style.backgroundColor = 'transperent';
    container.appendChild(square);

    //to avoid double borders, top and left borders are applied to every cell,
    //then the remaining borderless cells are determined and given a border.
    // i originally used grid gap and had the container background
    //color as the borders. However when i changed the background color by changing each
    // cell individually, it got quite slow with large grids. I changed un-colored
    // grid items to be transperent, so i could use the container background as the
    //background color. now when i change the background color i am only changing the
    // one container and it is much faster.
    //set border top and left to every grid item
    square.classList.add('border-top-left');
  }
  //add a right border the the right most items
  const rightItems = document.querySelectorAll(`.grid-item:nth-child(${gridSize}n)`);
  for (let i = 0; i < rightItems.length; i++) {
    rightItems[i].setAttribute('data-right', 'true');
    rightItems[i].classList.toggle('border-right');
    }
    
     // add a bottom border to the bottom most items
  let gridItems = document.querySelectorAll('.grid-item');
  const lastItems = Array.from(gridItems).slice(-`${gridSize}`);
  for (let i = 0; i < lastItems.length; i++) {
    lastItems[i].setAttribute('data-bottom', 'true');
    lastItems[i].classList.toggle('border-bottom');
  }
}

createGrid();

gridItems = document.querySelectorAll('.grid-item');

// set default colour to black
let ink = '#000000';

//pen color picker
const colorPicker = document.querySelector('#color-select');
colorPicker.addEventListener('input', (e) => {
  ink = e.target.value;
  if (grab) {
    grab = false;
    dropper.classList.remove('btn-on');
  }
  // fill = false;
  // colorFillButton.classList.remove('btn-on');
});

// shading toggle
let shading = false;
const shaderButton = document.querySelector('#shader-btn');
shaderButton.addEventListener('click', () => {
  if (shading) {
    shading = false;
  } else {
    shading = true;
    rainbow = false;
    rainbowButton.classList.remove('btn-on');
    lighten = false;
    lightenButton.classList.remove('btn-on');
    eraser = false;
    eraserButton.classList.remove('btn-on');
  }
  if (grab) {
    grab = false;
    dropper.classList.remove('btn-on');
  }
});

// shading function

function RGBToHex(rgb) {
  // Choose correct separator
  let sep = rgb.indexOf(',') > -1 ? ',' : ' ';
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(')')[0].split(sep);

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length == 1) r = '0' + r;
  if (g.length == 1) g = '0' + g;
  if (b.length == 1) b = '0' + b;
  b = (+rgb[2]).toString(16);

  if (r.length == 1) r = '0' + r;
  if (g.length == 1) g = '0' + g;
  if (b.length == 1) b = '0' + b;
  return '#' + r + g + b;
}

function adjust(RGBToHex, rgb, amount) {
  let color = RGBToHex(rgb);
  return (
    '#' +
    color
      .replace(/^#/, '')
      .replace(/../g, (color) =>
        ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2)
      )
  );
}

// eyedrop color grabbing tool
const dropper = document.querySelector('#color-grabber');
let grab = false;
dropper.addEventListener('click', () => {
  // when grab is true, all drawing is frozen until a color is selected
  if (grab) {
    grab = false;
    dropper.classList.remove('btn-on');
  } else {
    grab = true;
  }

  if (fill) {
    fill = false;
    colorFillButton.classList.remove('btn-on');
  }
});

// default eraser to false and listen for toggle
let eraser = false;
const eraserButton = document.querySelector('#eraser-btn');
eraserButton.addEventListener('click', () => {
  if (eraser) {
    eraser = false;
  } else {
    eraser = true;
    shading = false;
    shaderButton.classList.remove('btn-on');
    rainbow = false;
    rainbowButton.classList.remove('btn-on');
    lighten = false;
    lightenButton.classList.remove('btn-on');
  }

  if (grab) {
    grab = false;
    dropper.classList.remove('btn-on');
  }
});

// default rainbow ink to false and listen for toggle
let rainbow = false;
const rainbowButton = document.querySelector('#rainbow-btn');
rainbowButton.addEventListener('click', () => {
  if (rainbow) {
    rainbow = false;
  } else {
    rainbow = true;
    shading = false;
    shaderButton.classList.remove('btn-on');
    lighten = false;
    lightenButton.classList.remove('btn-on');
    eraser = false;
    eraserButton.classList.remove('btn-on');
  }

  if (grab) {
    grab = false;
    dropper.classList.remove('btn-on');
  }
});

//create random colour generator
function randomColor() {
  // return "#" + Math.floor(Math.random()*16777215).toString(16);
  // this returns fewer colors but they are all nice and bright
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

// slider

let progressBar = document.getElementById('progress-bar');

function rangeSlider(value) {
  let gridLabels = document.querySelectorAll('#range-value');
  progressBar.style.width = (value / 60) * 100 + '%';
  for (let i = 0; i < gridLabels.length; i++) {
    gridLabels[i].textContent = value;
  }
  // document.querySelectorAll('#range-value').textContent = value;
  gridSize = parseInt(value);
  deleteGrid();
  createGrid();
  listen();
  reInit();
  // turn the grid button back on if it is off.
  const gridButton = document.querySelector('#grid-btn');
  if (gridButton.classList.contains('btn-on')) {
    //pass
  } else {
    gridButton.classList.toggle('btn-on');
  }
}

function reInit() {
  deleteGrid();
  createGrid();
  listen();
}

// let progressBar = document.getElementById('progress-bar');

function rangeSliderValue(value) {
  let gridLabels = document.querySelectorAll('#range-value');
  for (let i = 0; i < gridLabels.length; i++) {
    gridLabels[i].textContent = value;
  }
  progressBar.style.width = (value / 60) * 100 + '%';
}

function deleteGrid() {
  while (container.firstChild) {
    container.removeEventListener('mousedown', drawClick);
    container.removeEventListener('mouseenter', drawClickHover);
    container.lastChild = null;
    container.removeChild(container.lastChild);
  }
}

//fade grid
function fadeGrid(item) {
  // if the cell hasnt been coloured, set it to the background color (un marked cells are transperent)
  if (item.style.backgroundColor == '' || item.style.backgroundColor == 'transperent') {
    item.style.backgroundColor == bgColor;
  }

  // attatch class to each item. this fades the color to the background color over 1.5 seconds

  // apply a random fadeout time to each item

  let fadeSpeed = Math.random() * 10;
  if (fadeSpeed > 8) {
    item.classList.add('clear-fade');
  } else if (fadeSpeed > 6) {
    item.classList.add('clear-fade-2');
  } else if (fadeSpeed > 4) {
    item.classList.add('clear-fade-3');
  } else if (fadeSpeed > 2) {
    item.classList.add('clear-fade-4');
  } else {
    item.classList.add('clear-fade-5');
  }
}

// clear grid with a fade out
let root = document.documentElement;
const clearButton = document.querySelector('#clear-grid');
function clearGrid() {
  // sets the css background color to the js variable bgColor. this is so the fadeout class can be applied, and use its background color
  root.style.setProperty('--bg-color', bgColor);
  gridItems = document.querySelectorAll('.grid-item');
  for (let i = 0; i < gridItems.length; i++) {
    fadeGrid(gridItems[i]);
  }
  // set a timer so the fade has time to execute, then reset all the grid cells.
  setTimeout(function () {
    for (let i = 0; i < gridItems.length; i++) {
      gridItems[i].style.backgroundColor = '';
      gridItems[i].removeAttribute('data-inked');
      gridItems[i].removeAttribute('data-shade');
      gridItems[i].classList.remove('clear-fade');
      gridItems[i].classList.remove('clear-fade-2');
      gridItems[i].classList.remove('clear-fade-3');
      gridItems[i].classList.remove('clear-fade-4');
      gridItems[i].classList.remove('clear-fade-5');
    }
  }, 1500);
  container.style.backgroundColor = bgColor;

  // turn off the button after a very short delay
  setTimeout(function () {
    clearButton.classList.remove('btn-on');
  }, 1400);
}
clearButton.addEventListener('click', clearGrid);

