/* about animation */
let poster_img = document.querySelectorAll('.poster_img');

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    console.log("scrollY", value);

    if(value>430){
        poster_img[0].style.animation='slide1 2s ease-out';
        poster_img[1].style.animation='slide2 2s ease-out';
        
    }else{
        poster_img[0].style.animation='out1 2s ease-out forwards';
        poster_img[1].style.animation='out2 2s ease-out forwards';
    }


})

/* skill animation */



/* work filter */


const categories = document.querySelector('.category');
const projects = document.querySelectorAll('.project');

categories.addEventListener('click', (event)=>{
    console.log(event);
    // 화면에 있는 버튼을 클릭한 뒤 콘솔화면을 확인 합니다

    const filter = event.target.dataset.category;
    console.log(filter);
    // 화면에 있는 버튼을 클릭한 뒤 콘솔화면 확인 합니다

    projects.forEach((project) => {
        console.log(project.dataset.type);
        //화면에 버튼을 클릭한 뒤 콘솔화면을 확인 합니다

    if (filter === 'all' || filter === project.dataset.type){
        project.style.display = 'block';
    }else{
        project.style.display = 'none';
    }
    if (filter == null){
        active_button.classList.remove('category_selected')
        return;
    }
    
    })

// 클릭한 버튼에 category_selected 설정하기
const active_button = document.querySelector('.category_selected');
active_button.classList.remove('category_selected')
                            // .category_selected는 오류, 마침표 반드시 생략
event.target.classList.add('category_selected');
console.log(event.target);


})


/* 추가 실습 메인 메뉴에 셀렉티드 설정하기 */

navMenu.addEventListener('click', (event)=>{
    console.log(event);


const main_menu = document.querySelector('.active');
main_menu.classList.remove('active');
event.target.classList.add('active');
console.log(event.target);


})

