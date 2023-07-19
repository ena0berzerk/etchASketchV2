const container = document.querySelector('.container');

// grid

for (let i = 0; i < 16; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  container.appendChild(row);
  for (let q = 0; q < 16; q++) {
    const cell = document.createElement('div');
    cell.classList.add('square');
    row.appendChild(cell);
  }
}

// paint
