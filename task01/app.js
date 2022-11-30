function slidesPlugin(num) {
  const slides = document.querySelectorAll('.slide');
  const activeClass = 'active';

  num !== undefined && slides[num].classList.add(activeClass);
  
  slides.forEach(slide => {
    const handler = e => {
      clearActiveClasses();
  
      slide.classList.add(activeClass);
    }
  
    slide.addEventListener('click', handler);
  });
  
  function clearActiveClasses() {
    slides.forEach(s => s.classList.remove(activeClass));
  }
}

slidesPlugin();
