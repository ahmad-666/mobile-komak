import anime from 'animejs' ;
let getStyle = (el,prop) => window.getComputedStyle(el,null).getPropertyValue(prop);
let wrapper = document.querySelector('#trust') ;
let slider = wrapper.querySelector('#sponsers') ;
let slide = slider.querySelector('.sponser') ;
let slidesNum = slider.querySelectorAll('.sponser').length ;
let sliderWidth = slidesNum*(parseInt(getStyle(slide,'width')) + parseInt(getStyle(slide,'margin-right')) + parseInt(getStyle(slide,'margin-left'))) ;
let offset = (sliderWidth - window.innerWidth > 0) ? (sliderWidth - window.innerWidth) : (0) ;
let time = slidesNum*1500 ;
if(offset > 0) animateSlider() ;
function animateSlider(){
    let animation = anime({
        targets: slider,
        duration: time ,
        delay: 0 ,
        loop: true ,
        direction: 'alternate',
        right: -(offset + slide.getBoundingClientRect().width/2) ,
        easing: 'linear'
    })
    slider.addEventListener('mouseenter',e=>{
        animation.pause() ;
    })
    slider.addEventListener('mouseleave',e=>{
        animation.play() ;
    })
}
