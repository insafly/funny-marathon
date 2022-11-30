const container = document.querySelector('.container');
const upBtn = container.querySelector('.up-button');
const downBtn = container.querySelector('.down-button');
const sidebar = container.querySelector('.sidebar');
const mainSlide = container.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

let currentIdx = 0;

sidebar.style.top = `-${ (slidesCount - 1) * 100 }vh`;

const changeHandler = direction => {
  if (direction === 'up') {
    currentIdx = currentIdx < slidesCount - 1 ? currentIdx + 1 : 0;
  } else {
    currentIdx = currentIdx > 0 ? currentIdx - 1 : slidesCount - 1;
  }

  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${ currentIdx * height }px)`;
  sidebar.style.transform = `translateY(${ currentIdx * height }px)`;
}


document.addEventListener('keydown', e => {
  e.key === 'ArrowUp' && changeHandler('up');
  e.key === 'ArrowDown' && changeHandler('down')
});
upBtn.addEventListener('click', () => changeHandler('up'));
downBtn.addEventListener('click', () => changeHandler('down'));
