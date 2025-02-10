document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the 'box' class
  const boxes = document.querySelectorAll('.box');

  // Create an intersection observer to detect when each element enters the viewport
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-viewport');

        // Optionally, stop observing the element once it has entered the viewport
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the element is in the viewport
  });

  // Start observing each element with the 'box' class
  boxes.forEach(box => {
    observer.observe(box);
  });

  // Toggle menu functionality
  const toggleOpen = document.getElementById('toggleOpen');
  const toggleClose = document.getElementById('toggleClose');
  const collapseMenu = document.getElementById('collapseMenu');

  function handleClick() {
    if (collapseMenu.style.display === 'block') {
      collapseMenu.style.display = 'none';
    } else {
      collapseMenu.style.display = 'block';
    }
  }

  toggleOpen.addEventListener('click', handleClick);
  toggleClose.addEventListener('click', handleClick);

  // Accordion functionality
  document.querySelectorAll('.accordion').forEach(elm => {
    const button = elm.querySelector('.toggle-button');
    const content = elm.querySelector('.content');
    const arrowIcon = elm.querySelector('.arrow');

    button.addEventListener('click', () => {
      const isHidden = content.classList.toggle('invisible');
      content.style.maxHeight = isHidden ? '0px' : `${content.scrollHeight + 100}px`;
      content.classList.toggle('pb-5', !isHidden);
      button.classList.toggle('font-semibold');
      elm.classList.toggle('bg-blue-50');
      arrowIcon.classList.toggle('-rotate-180', !isHidden);
      arrowIcon.classList.toggle('-rotate-90', isHidden);
    });
  });
});
