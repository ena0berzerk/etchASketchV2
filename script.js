const container = document.querySelector('.container');
let defaultSizeOfGrid = 16;
const sizeBtn = document.querySelector('.size');

function promptSize() {
  return +prompt('Choose size between 4 and 100', 16);
}

function getSquares() {
  return document.querySelectorAll('.square');
}

// grid
function grid(size) {
  for (let w = 0; w < size; w++) {
    let row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let e = 0; e < size; e++) {
      let square = document.createElement('div');
      square.classList.add('square');
      row.appendChild(square);
    }
  }
}
grid(defaultSizeOfGrid);

function changeSize() {
  sizeBtn.addEventListener('click', () => {
    newSize = promptSize();
    if (newSize > 100) {
      newSize = 100;
    }
    if (newSize < 4 || newSize === '') {
      newSize = 16;
    }
    container.replaceChildren();
    sizedGrid(newSize);
    defaultBrush();
    blackBrush();
    cleanGrid();
    rainbowBrush();
  });
}
changeSize();

// Making new grid // !!! think later how to DRY. I created 2 same functions with small changes (line 12)
function sizedGrid(size) {
  for (let w = 0; w < size; w++) {
    let row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let e = 0; e < size; e++) {
      let square = document.createElement('div');
      square.classList.add('square');
      square.style.cssText = `width: ${500 / newSize}px; height: ${500 / newSize}px`;
      row.appendChild(square);
    }
  }
}

function defaultBrush() {
  const allSquare = getSquares();
  allSquare.forEach((square) => {
    const squareShift = square.addEventListener('mouseenter', () => {
      square.classList.add('paint');
    });
  });
}
defaultBrush();

const blackBtn = document.querySelector('.black');
const rainbowBtn = document.querySelector('.rainbow');

function rainbowBrush() {
  rainbowBtn.addEventListener('click', () => {
    const allSquare = getSquares();
    allSquare.forEach((squareEl) => {
      squareEl.addEventListener('mouseenter', () => {
        squareEl.style.backgroundColor = `rgb(${rgb()},${rgb()}, ${rgb()})`;
      });
    });
  });
}
rainbowBrush();

function rgb() {
  let calcRGB = Math.floor(Math.random() * 255);
  return calcRGB;
}

function blackBrush() {
  blackBtn.addEventListener('click', () => {
    const allSquare = getSquares();
    allSquare.forEach((squareEl) => {
      squareEl.addEventListener('mouseenter', () => {
        squareEl.style.backgroundColor = `#111`;
      });
    });
  });
}
blackBrush();

function cleanGrid() {
  const allSquare = getSquares();
  const cleanBtn = document.querySelector('.clean');
  const cleanFunc = cleanBtn.addEventListener('click', () => {
    allSquare.forEach((squareEl) => {
      squareEl.style.backgroundColor = 'white';
    });
  });
}
cleanGrid();
