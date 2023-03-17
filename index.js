const hamburguerMenuIndex = document.querySelector('.header__svg');
const menu = document.querySelector('.DOM-menu--inactive');

hamburguerMenuIndex.addEventListener('click', () => {
  menu.classList.toggle('DOM-menu');
  menu.innerHTML = `
  <svg
    class="DOM-menu__svg"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-x"
    viewBox="0 0 16 16"
  >
    <path
      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
  <ul class="DOM-menu__ul">
    <li><a href="about.html">About</a></li>
    <li><a href="#">Program</a></li>
    <li><a href="#">Join</a></li>
    <li><a href="#">Sponsor</a></li>
    <li><a href="#">News</a></li>
    <li class="li-special"><a href="#">CC Campaign</a></li>
  </ul>

`;
  const closeMenu = document.querySelector('.DOM-menu__svg');
  closeMenu.addEventListener('click', () => {
    menu.innerHTML = '';
    menu.classList.toggle('DOM-menu');
  });
});
