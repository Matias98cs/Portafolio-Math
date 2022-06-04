const iconoMenu = document.querySelector('#icono-menu');
const menu = document.querySelector('#menu');
const headerDiv = document.querySelector('header-container-profile')


iconoMenu.addEventListener('click', () => {

    if(iconoMenu.classList.contains('fa-bars')) {
        iconoMenu.classList.remove('fa-bars');
        iconoMenu.classList.add('fa-xmark')
    } else {
        iconoMenu.classList.add('fa-bars');
        iconoMenu.classList.remove('fa-xmark')
    }
    menu.classList.toggle('active');

})