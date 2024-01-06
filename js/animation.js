/* about animation */
let poster_img = document.querySelectorAll('.poster_img');

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    console.log("scrollY", value);

    if(value>1600){
        poster_img[0].style.animation='out1 2s ease-out forwards';
        poster_img[1].style.animation='out2 2s ease-out forwards';
    }else{
        poster_img[0].style.animation='slide1 2s ease-out';
        poster_img[1].style.animation='slide2 2s ease-out';
    }
});