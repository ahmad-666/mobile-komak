import anime from 'animejs' ;
let btn = document.querySelector('button.prev') ;
let step = document.querySelector('#timeline').clientWidth/6 ;
btn.addEventListener('click',e=>{
    animation() ;
})
function animation(){
    anime({
        targets: '#timeline .line',
        duration: 500 ,
        easing: 'linear' ,
        loop: 1 ,
        direction: 'normal' ,
        width: `+=${step}`
    })
}