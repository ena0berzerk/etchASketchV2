const container = document.querySelector('.container');
let defaultSizeOfGrid = 16;
const sizeBtn = document.querySelector('.size');
const blackBtn = document.querySelector('.black');
const rainbowBtn = document.querySelector('.rainbow');
const eraserBtn = document.querySelector('.eraser');

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
    if (newSize == null || newSize == '' || newSize == false || !newSize) {
      alert('Canceled!');
      false;
    } else if (newSize < 4 || newSize > 100 || isNaN(newSize)) {
      alert('Choose between 4 and 100!');
      false;
    } else {
      container.replaceChildren();
      sizedGrid(newSize);
      chooseBrush();
      cleanGrid();
    }
  });
}
changeSize();

function erase() {
  const eraserBtn = document.querySelector('.eraser');
  eraserBtn.addEventListener('click', () => {
    const erase = getSquares();
    if (eraserBtn.textContent === 'Eraser') {
      eraserBtn.textContent = 'Eraser Off';
    } else if (eraserBtn.textContent === 'Eraser Off') {
      eraserBtn.textContent = 'Eraser';
    }
    erase.forEach((eraseEl) => {
      eraseEl.addEventListener('mouseenter', () => {
        eraseEl.classList.toggle('paint');
      });
    });
  });
}
erase();

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

function chooseBrush() {
  const allSquare = getSquares();
  allSquare.forEach((square) => {
    square.addEventListener('mouseenter', () => {
      square.classList.add('paint');
    });
  });
}
chooseBrush();

function cleanGrid() {
  const allSquare = getSquares();
  const cleanBtn = document.querySelector('.clean');
  const cleanFunc = cleanBtn.addEventListener('click', () => {
    allSquare.forEach((squareEl) => {
      squareEl.classList.remove('paint');
    });
  });
}
cleanGrid();
