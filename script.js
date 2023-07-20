const container = document.querySelector('.container');
let currentSizeOfGrid = 16;
const sizeBtn = document.querySelector('.size');

function promptSize() {
  return +prompt('Choose size between 4 and 100', 16);
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
grid(currentSizeOfGrid);

// Click button and change size
sizeBtn.addEventListener('click', () => {
  newSize = promptSize();
  if (newSize < 4 || newSize > 100 || isNaN(newSize)) {
    alert('Error. Choose between 4 and 100');
    return false;
  } else if (newSize === '' || newSize === false || newSize === null) {
    alert('hello');
    return false;
  } else {
    container.replaceChildren();
    sizedGrid(newSize);
    paint();
  }
});

// Make new grid // !!! think later how to DRY. I created 2 same functions with small changes (line 11)
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

// paint
function paint() {
  const paintSquare = document.querySelectorAll('.square');
  paintSquare.forEach((square) => {
    square.addEventListener('mouseenter', () => {
      square.classList.add('paint');
    });
  });
}
paint();
