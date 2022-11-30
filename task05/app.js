const startBtn = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const { width, height } = board.getBoundingClientRect();
const colors = [
  '#5E67A5', '#59809F', '#50B490', '#4BCE8A', '#36B089', '#3EC880',
  '#634DAF', '#5E67A5', '#59809F', '#559A98', '#50B490', '#4BCE8A',
  '#754BAF', '#7466A9', '#8783A8', '#6E9C9E', '#6AB898', '#86D89C',
  '#9948B1', '#9B64AD', '#8683A7', '#879EA4', '#86BBA1', '#86D89C',
  '#9948B1', '#9B64AD', '#A782AF', '#BBA2B0', '#A2C0A8', '#C2E2AF',
  '#BC43B2', '#C463B7', '#CC83B4', '#B9A3B0', '#BCC3B1', '#E0E8B9',
  '#BB42B1', '#C364B5', '#CB84B4', '#D3A6B7', '#F2C8C0', '#E0E8B9',
  '#CE42B3', '#AF5497', '#E085BB', '#EAA8BC', '#F4CAC0', '#FDEDC2',
];

let time = 0;
let score = 0;
let timer;

const setTime = value => {
  timeEl.innerHTML = `00 : ${ value }`;
}

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min)

const getColor = () => colors[getRandomNum(0, colors.length)];

const createRandomCircle = () => {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  const size = getRandomNum(10, 60);
  const x = getRandomNum(0, width - size);
  const y = getRandomNum(0, height - size);
  
  circle.style.width = `${ size }px`;
  circle.style.height = `${ size }px`;
  circle.style.left = `${ x }px`;
  circle.style.top = `${ y }px`;
  circle.style.background = getColor();

  board.append(circle);
}

const finishGame = () => {
  clearInterval(timer);
  timeEl.parentNode.style.opacity = 0;
  board.innerHTML = `<h1>Score: <span class="primary">${ score }</span></h1>`
}

const decTime = () => {
  let current = --time;
  setTime(current < 10 ? `0${ current }` : current);
  if (current === 0) finishGame();
}

const startGame = () => {
  screens[1].classList.add('up');
  setTime(time);
  createRandomCircle();
  timer = setInterval(decTime, 1000);
}

const startHandler = e => {
  e.preventDefault();
  
  screens[0].classList.add('up');
}

const aimHandler = e => {
  if (!e.target.classList.contains('circle')) return;
  score++;
  e.target.remove();
  createRandomCircle();
}

const timeHandler = e => {
  e.preventDefault();

  if (!e.target.classList.contains('time-btn')) return;

  time = parseInt(e.target.dataset.time);
  startGame();
}

startBtn.addEventListener('click', startHandler);
timeList.addEventListener('click', timeHandler);
board.addEventListener('click', aimHandler);
