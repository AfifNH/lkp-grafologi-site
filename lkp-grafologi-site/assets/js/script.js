  const items = document.querySelectorAll('.nav-item');

  function closeAll(except){
    items.forEach(it => { if(it !== except) it.classList.remove('open'); });
  }

  items.forEach(item => {
    const trigger = item.querySelector('.nav-link');
    const mega = item.querySelector('.mega');
    if(!mega) return;

    let hoverTimer;

    item.addEventListener('mouseenter', () => {
      clearTimeout(hoverTimer);
      closeAll(item);
      item.classList.add('open');
    });
    item.addEventListener('mouseleave', () => {
      hoverTimer = setTimeout(() => item.classList.remove('open'), 120);
    });

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = item.classList.contains('open');
      closeAll(item);
      item.classList.toggle('open', !isOpen);
    });
  });

  document.addEventListener('click', (e) => {
    if(!e.target.closest('.nav-item')) closeAll(null);
  });
