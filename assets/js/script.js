const menu = document.querySelector('.main-nav .menu');
const toggleMenu = document.querySelector('.toggle-menu');

toggleMenu.addEventListener('click', function () {
    const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
    toggleMenu.setAttribute('aria-expanded', !open);
    menu.hidden = !menu.hidden;
    if (!menu.hidden) {
        menu.querySelector('a').focus();
    }
});