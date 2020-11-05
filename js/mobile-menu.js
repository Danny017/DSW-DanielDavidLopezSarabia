const hamburger = document.getElementById('hamburger');
const navUL = document.getElemtById('nav-ul');

hamburger.addEventListener('cilck', () => {
  navUL.classList.toggle('show');
});
