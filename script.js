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

function customSelect() {
    let btnSelectToggle = document.querySelector(".select__toggle");
    let btnSelect = document.querySelector(".select__btn"); 
    let dropdownMenu = document.querySelector(".select__dropdown");
    let optionsSelect = document.querySelectorAll(".select__option");
    let optContent, optValue, optIndex, display;
  
    btnSelectToggle.addEventListener("click", function () {
      dropdownMenu.classList.toggle("block-none");

      if(!dropdownMenu.classList.contains('block-none')) btnSelect.style.transform = 'rotate(180deg)';
      else btnSelect.style.transform = '';
      
      
      for (let opt of optionsSelect) {
        opt.onclick = function () {
          //замена контента на выбранный и замена цвета текста
          optContent = opt.textContent;
          btnSelectToggle.textContent = optContent;
          btnSelectToggle.style.color = '#000';
  
          //замена значения
          optValue = opt.dataset.value;
          btnSelectToggle.value = optValue;
  
          //замена индекса
          optIndex = opt.dataset.index;
          btnSelectToggle.dataset.index = optIndex;
  
          //после выбора скрыть меню
          dropdownMenu.classList.add("block-none");
        };
      }
    });
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

function formPopup() {
    let popup = document.querySelector('.form-popup');
    let closeBtn = document.querySelector('.form-popup__close');
    let submitBtn = document.querySelector('.subscription .subscription__button');

    let form = document.querySelector('.subscription');
    let firstName = document.querySelector('#subscription__first-name');
    let lastName = document.querySelector('#subscription__last-name');
    let phoneNumber = document.querySelector('#subscription__phone-number');

    form.oninput = function() {
        if((firstName.value.length && lastName.value.length && phoneNumber.value.length) >= 1) {
            submitBtn.addEventListener('click', function(){
                popup.style.display = 'flex';
                firstName.value = '';
            lastName.value = '';
            phoneNumber.value = '';
            })

            closeBtn.addEventListener('click', function(){
                popup.style.display = 'none';
            })
        }
    }
}

burgerMenu();
customSelect();
formPopup()
upButton();