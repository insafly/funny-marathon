const board = document.querySelector('#board');
const SQUARES_NUMBER = 1974;
const colors = [ '#4ff2e0', '#43c8e5', '#6e9eeb', '#9a75f0', '#c74bf6', '#f320fa' ];

const getColor = () => colors[Math.floor(Math.random() * colors.length)];

const setColor = e => {
  const cell = e.target;
  const color = getColor();
  cell.style.backgroundColor = color;
  cell.style.boxShadow = `0 0 2px ${ color }, 0 0 10px ${ color }`;
}

const removeColor = e => {
  const cell = e.target;
  cell.style.backgroundColor = '#1d1d1d';
  cell.style.boxShadow = `0 0 2px #000`;
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave', removeColor);

  board.append(square);
}
