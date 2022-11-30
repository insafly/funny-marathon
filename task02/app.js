const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
const classes = {
  hold: 'hold',
  hide: 'hide',
  hovered: 'hovered',
};

// item
const dragstartHandler = e => {
  e.target.classList.add(classes.hold);
  setTimeout(() => { e.target.classList.add(classes.hide) }, 0)
}

const dragendHandler = e => {
  e.target.classList.remove(classes.hide, classes.hold);
}

// placeholder
const dragoverHandler = e => {
  e.preventDefault();
}

const dragenterHandler = e => {
  e.target.classList.add(classes.hovered);
}

const dragleaveHandler = e => {
  e.target.classList.remove(classes.hovered);
}

const dropHandler = e => {
  e.target.append(item);
  e.target.classList.remove(classes.hovered);
}

placeholders.forEach(placeholder => {
  placeholder.addEventListener('dragover', dragoverHandler);
  placeholder.addEventListener('dragenter', dragenterHandler);
  placeholder.addEventListener('dragleave', dragleaveHandler);
  placeholder.addEventListener('drop', dropHandler);
});

item.addEventListener('dragstart', dragstartHandler);
item.addEventListener('dragend', dragendHandler);
