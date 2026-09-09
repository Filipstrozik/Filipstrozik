const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.header-container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#181b32a6';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});

const experienceItems = document.querySelectorAll('.exp-item[data-start][data-end]');

experienceItems.forEach((item) => {
  const start = new Date(`${item.dataset.start}-01T00:00:00`);
  const end = item.dataset.end === 'now' ? new Date() : new Date(`${item.dataset.end}-01T00:00:00`);
  const totalMonths = Math.max(
    1,
    (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth() + 1,
  );
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const duration = [];

  if (years > 0) duration.push(`${years} ${years === 1 ? 'year' : 'years'}`);
  if (months > 0) duration.push(`${months} ${months === 1 ? 'month' : 'months'}`);

  item.querySelector('.exp-duration').textContent = `(${duration.join(', ')})`;
});
