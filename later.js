// FOR FUTURE WORK

// // paint. off by now
// const paintSquare = document.querySelectorAll('.square');

// paintSquare.forEach((square) => {
//   square.addEventListener('mouseenter', () => {
//     square.classList.add('paint');
//   });
// });

// find width of container
// let getStylesContainer = window.getComputedStyle(container2);
// const getWidthContainer = parseInt(getStylesContainer.width, 10);
// const sizeSquares = (getWidthContainer / getSize) * 2;
// console.log(sizeSquares);

// grid 1
// for (let i = 0; i < 16; i++) {
//   let row = document.createElement('div');
//   row.classList.add('row');
//   container.appendChild(row);
//   for (let q = 0; q < 16; q++) {
//     let square = document.createElement('div');
//     square.classList.add('square');
//     row.appendChild(square);
//   }
// }

// check addEventListener
// function isSizeOfGridCorrect() {
//   if (getSize < 16 || getSize > 100 || isNaN(getSize)) {
//     console.log('Error. Choose between 16 and 100');
//   }
// }

// function paintRainbowBrush() {
//  const selSquare = getSquares();
//  const rainbowBtn = document.querySelector('.rainbow');
//  const arrRainbowColors = [
//    '#e81416', // Red
//    '#ffa500', // Orange
//    '#faeb36', // Yellow
//    '#79c314', // Green
//    '#487de7', // Blue
//    '#4b369d', // Indigo
//    '#70369d', // Violet
//  ];
//  rainbowBtn.addEventListener('click', () => {
//    selSquare.forEach((sqEl) => {
//      const rainbowRemove = sqEl.addEventListener('mouseenter', () => {
//        const shuffleColor = arrRainbowColors[Math.floor(Math.random() * arrRainbowColors.length)];
//        sqEl.classList.add('rainbow');
//        sqEl.style.backgroundColor = `${shuffleColor}`;
//      });
//    });
//  });
// }
// paintRainbowBrush();
