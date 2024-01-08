/* hamburger button 발동 */

const navToggle = document.querySelector('.hamburger');
const navMenu = document.querySelector('header');
const menulist = document.querySelector('.menu_item');
var ham = document.querySelector('#menu_icon');
var clo = document.querySelector('#close_icon');


    var state=["none","block"];
    var i=0;
    var j=1;

    function change(){
        if(i>=state.length){
            i=0;
        }
        ham.style.display=state[i];
        i++;

        clo.style.display=state[j];
        j--

        if(j<0){
            j=1;
        }

    }



// 햄버거 버튼 클릭 이벤트 //
navToggle.addEventListener('click', ()=> {
    navMenu.classList.toggle('open');
    change();
})


// 모바일 화면에서 네비게이션 메뉴 클릭 시 메뉴 숨김 //
navMenu.addEventListener('click', ()=> {
    navMenu.classList.remove('open');

})
