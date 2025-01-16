document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.block');
    const boxes = document.querySelectorAll('.box');
  
    boxes.forEach((box) => {
      box.addEventListener('mouseenter', () => {
        const hoverType = box.getAttribute('data-hover');
        blocks.forEach((block, index) => {
          if (hoverType === 'all' || hoverType == index + 1) {
            block.classList.add('glow');
          } else {
            block.classList.remove('glow');
          }
        });
      });
  
      box.addEventListener('mouseleave', () => {
        blocks.forEach((block) => block.classList.remove('glow'));
      });
    });
  });
  