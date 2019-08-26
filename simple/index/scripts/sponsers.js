//import anime from 'animejs' ;
let getStyle = (el,prop) => window.getComputedStyle(el,null).getPropertyValue(prop);
let trustWrapper = document.querySelector('#trust') ;
let slider = trustWrapper.querySelector('#sponsers') ;
let slide = slider.querySelector('.sponser') ;
let slidesNum = slider.querySelectorAll('.sponser').length ;
let sliderWidth = slidesNum*(parseInt(getStyle(slide,'width')) + parseInt(getStyle(slide,'margin-right')) + parseInt(getStyle(slide,'margin-left'))) ;
let offset = (sliderWidth - window.innerWidth > 0) ? (sliderWidth - window.innerWidth) : (0) ;
let trustTime = slidesNum*1500 ;
if(offset > 0) animateSlider() ;
function animateSlider(){
    anime({
        targets: slider,
        duration: trustTime ,
        delay: 0 ,
        loop: true ,
        direction: 'alternate',
        right: -(offset + slide.getBoundingClientRect().width/2) ,
        easing: 'linear'
    })
}
