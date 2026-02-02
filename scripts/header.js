const headerScript = () => {    
    document.addEventListener('DOMContentLoaded', () => {
        const body = document.querySelector('body');
        const mobMenuBtn = body.querySelector(".mobile-menu-button");
        const mobileMenu = body.querySelector(".mobile-menu-wrapper");
        const mobileMenuClicked = () => {
            let mobileMenuClasses = mobileMenu.classList;
            if(mobileMenuClasses.contains("mobile-menu-active")) {
                mobMenuBtn.classList.remove('mobile-menu-active');
                mobileMenu.classList.remove('mobile-menu-active');
            } else {
                mobMenuBtn.classList.add('mobile-menu-active');
                mobileMenu.classList.add('mobile-menu-active');
            }
        }
        if(mobMenuBtn) {
            mobMenuBtn.addEventListener("click", mobileMenuClicked);
        }
    });
}

headerScript();