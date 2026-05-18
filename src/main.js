const mobileMenu = document.querySelector('.mobile-menu');
const openMobile = document.querySelector('.header-menu-button');
const closeBtn = document.querySelector('.mobile-menu-close-button')




openMobile.addEventListener('click', () => {
    togglemobileMenu();
});

closeBtn.addEventListener('click', () => {
    togglemobileMenu();
});
function togglemobileMenu(params) {
    mobileMenu.classList.toggle('is-open')
}