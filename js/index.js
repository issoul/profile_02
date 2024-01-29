/* hamburger button 발동 */

const navToggle = document.querySelector('.hamburger');
const navMenu = document.querySelector('header');
const menulist = document.querySelector('.menu_item');

const ham = document.querySelector('#menu_icon');



var i = 0;

// 햄버거 버튼 클릭 이벤트 //
navToggle.addEventListener('click', ()=> {
    navMenu.classList.toggle('open');
    // ham.classList.toggle('close');
    // ham.innerHTML = '<span class="material-symbols-outlined" id="menu_icon">close</span>'
    if(i % 2 == 0) {
        ham.textContent="close";
        i++;
    } else {
        ham.textContent="menu";
        i++;
    };
})


// 모바일 화면에서 네비게이션 메뉴 클릭 시 메뉴 숨김 //
navMenu.addEventListener('click', ()=> {
    navMenu.classList.remove('open');
    // ham.innerHTML = '<span class="material-symbols-outlined" id="menu_icon">menu</span>'
    if(i % 2 == 0) {
        ham.textContent="close";
        i++;
    } else {
        ham.textContent="menu";
        i++;
    };
})

