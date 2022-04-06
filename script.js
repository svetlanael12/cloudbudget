function burgerMenu() {
    let burgerBtn = document.querySelector('.menu-burger');
    let spanBurgerTop = document.querySelector('.menu__button_after');
    let spanBurgerMiddle = document.querySelector('.menu__button-label');
    let spanBurgerBottom = document.querySelector('.menu__button_before');

    let burgerMenuNav = document.querySelector('.nav-mobile');

    function closeMenu() {
        //меняем крестик на бургер
        spanBurgerMiddle.style.display = 'block';
        spanBurgerTop.style.transform = '';
        spanBurgerTop.style.top = '0';
        spanBurgerBottom.style.transform = '';
        spanBurgerBottom.style.bottom = '0';

        //скрываем меню
        burgerMenuNav.style.animation = '1s closed';
        burgerMenuNav.style.right = '-250px';
    }

    function showMenu() {
        spanBurgerMiddle.style.display = 'none';
        spanBurgerTop.style.transform = 'rotate(45deg)';
        spanBurgerTop.style.top = '40%';
        spanBurgerBottom.style.transform = 'rotate(135deg)';
        spanBurgerBottom.style.bottom = '40%';


        burgerMenuNav.style.animation = '1s show';
        burgerMenuNav.style.right = '0';
    }

    burgerBtn.addEventListener('click', function () {
        if (spanBurgerMiddle.style.display === 'none') {
            closeMenu();

        } else {
            showMenu();
        }
    })

    //клик вне поля закроет меню
    document.addEventListener('click', function (e) {
        if (e.target !== burgerBtn && e.target !== spanBurgerTop && e.target !== spanBurgerMiddle && e.target !== spanBurgerBottom && e.target !== burgerMenuNav && (spanBurgerMiddle.style.display === 'none')) {
            closeMenu();
        }
    })
}

function upButton() {
    let upButton = document.querySelector('.up-button');

    window.onscroll = function () {
        if (window.pageYOffset > 200) {
            upButton.classList.remove('block-none');
        } else {
            upButton.classList.add('block-none');
        }
    };

    upButton.onclick = function () {
    window.scrollTo(0, 0);
    };
}

burgerMenu();
upButton();