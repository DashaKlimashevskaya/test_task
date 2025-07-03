document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.header__instant_access_btn_menu');
    const mobileMenu = document.querySelector('.popup_mobile');
    const iconOpen = document.querySelector('.header__instant_access_btn_menu_open');
    const iconClose = document.querySelector('.header__instant_access_btn_menu_close');

    if (hamburger && mobileMenu && iconOpen && iconClose) {
        iconClose.style.display = 'none';
        
        hamburger.addEventListener('click', function () {
            const isMenuVisible = mobileMenu.style.display === 'block';

            mobileMenu.style.display = isMenuVisible ? 'none' : 'block';

            iconOpen.style.display = isMenuVisible ? 'block' : 'none';
            iconClose.style.display = isMenuVisible ? 'none' : 'block';
            
            hamburger.style.backgroundColor = isMenuVisible ? '#4888FF' : '#E8E8E8'; 
            
        });
    }

    const desktopHamburger = document.querySelector(".header__utility_bar_btn_menu");
    const desktopPopup = document.querySelector(".popup_menu");

    if (desktopHamburger && desktopPopup) {
        desktopHamburger.addEventListener('click', () => {
            desktopPopup.style.display = desktopPopup.style.display === 'none' ? 'block' : 'none';
        });
    }
});