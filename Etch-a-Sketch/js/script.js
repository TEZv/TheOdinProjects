const sketchBoard = document.getElementById("board-sketch");
const gridSizePicker = document.getElementById("gridsize-picker");
const gridSizeLabel = document.getElementById("gridsize-label");
const colorPicker = document.getElementById("color");
const colorModeButton = document.getElementById("btn-color");
const rainbowModeButton = document.getElementById("btn-rainbow");
const clearButton = document.getElementById("btn-clean");
const eraserButton = document.getElementById("btn-eraser");
const sketchBoardWidth = 500;

let sketchingColor = colorPicker.value;
let currentGridSize = parseInt(gridSizePicker.value);
let coloringMode = true;
let rainbowMode = false;
let erasingMode = false;

let mouseIsDown = false;
document.body.addEventListener("mousedown", () => (mouseIsDown = true));
document.body.addEventListener("mouseup", () => (mouseIsDown = false));

// Go the populateGrid function on window load
window.onload = populateGrid(currentGridSize);

// Grid Size Picker .event listener to update the text showing current grid size
gridSizePicker.addEventListener("change", function () {
  currentGridSize = gridSizePicker.value;
  gridSizeLabel.textContent = currentGridSize + " x " + currentGridSize;
});

// .Event listener to update the number of square in the sketchboard
gridSizePicker.addEventListener("change", function () {
  erasingMode = false;
  coloringMode = true;
  rainbowMode = false;
  unpopulateGrid();
  populateGrid(currentGridSize);
});

// .Event listener to update the color for sketching
colorPicker.addEventListener("change", function () {
  erasingMode = false;
  coloringMode = true;
  rainbowMode = false;
  sketchingColor = colorPicker.value;
});

// .Event listener to clear the sketchboard
clearButton.addEventListener("click", clearBoard);

// Event listener to enter erasing mode
eraserButton.addEventListener("click", function () {
  erasingMode = true;
  coloringMode = false;
  rainbowMode = false;
});

// .Event listener to enter coloring mode
colorModeButton.addEventListener("click", function () {
  erasingMode = false;
  coloringMode = true;
  rainbowMode = false;
});

// .Event listener to enter rainbow coloring mode
rainbowModeButton.addEventListener("click", function () {
  erasingMode = false;
  coloringMode = false;
  rainbowMode = true;
});

function unpopulateGrid() {
  sketchBoard.innerHTML = "";
}

function populateGrid(currentGridSize) {
  // Use for loop to create necessary number of grid squares
  // and add them to the sketch board
  const numberOfSquares = currentGridSize ** 2;
  for (let i = 0; i < numberOfSquares; i++) {
    const gridSquare = createGridSquare(currentGridSize);
    sketchBoard.appendChild(gridSquare);
  }
}

function createGridSquare(currentGridSize) {
  const gridSquareHeightAndWidth = sketchBoardWidth / currentGridSize;
  const gridSquare = document.createElement("div");
  gridSquare.classList.add("grid-square");
  gridSquare.style.height = gridSquareHeightAndWidth + "px";
  gridSquare.style.width = gridSquareHeightAndWidth + "px";
  gridSquare.addEventListener("mouseover", changeGridSquareColor);
  gridSquare.addEventListener("mousedown", changeGridSquareColor);
  return gridSquare;
}

function changeGridSquareColor(event) {
  if (event.type == "mouseover" && !mouseIsDown) return;
  if (erasingMode && !coloringMode && !rainbowMode) {
    event.target.style.backgroundColor = "whitesmoke";
  } else if (!erasingMode && coloringMode && !rainbowMode) {
    event.target.style.backgroundColor = sketchingColor;
  } else if (!erasingMode && !coloringMode && rainbowMode) {
    event.target.style.backgroundColor = generateRandomRGBValue();
  }
}

function clearBoard() {
  coloringMode = true;
  erasingMode = false;
  rainbowMode = false;
  const gridSquares = sketchBoard.childNodes;
  gridSquares.forEach((gridSquare) => {
    gridSquare.style.backgroundColor = "whitesmoke";
  });
}

function generateRandomRGBValue() {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  return `rgb(${R},${G},${B})`;
}