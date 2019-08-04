import anime from 'animejs' ;
import colors from '../../colors.scss' ;
let wrapper = document.querySelector('#progress') ;
let fillLine = wrapper.querySelector('.fill') ;
let icons = wrapper.querySelectorAll('.stage > i') ;
let texts = wrapper.querySelectorAll('.stage h5') ;
let circles = wrapper.querySelectorAll('.stage .circle') ;
let ticks = wrapper.querySelectorAll('.stage .circle i') ;
let stagesNum = wrapper.querySelectorAll('.stage').length ;
let time = stagesNum*2000 ; //total time of animation --> 8000ms  
let tl = anime.timeline({
    loop: true ,
    direction: 'normal'
});
tl.add({
    targets: fillLine ,
    width: '100%' ,
    easing: 'linear' ,
    duration: time ,
    endDelay: time/(stagesNum-1)
},0)
tl.add({
    targets: icons,
    color: colors.darkBlue ,
    duration: (time/(stagesNum-1))/3 ,
    easing: 'linear',
    delay: anime.stagger(time/(stagesNum-1))
},0)
tl.add({
    targets: texts,
    color: colors.darkBlue ,
    duration: (time/(stagesNum-1))/3 ,
    easing: 'linear',
    delay: anime.stagger(time/(stagesNum-1))
},0)
tl.add({
    targets: circles,
    backgroundColor: colors.greenColor2,
    duration: (time/(stagesNum-1))/3 ,
    easing: 'linear',
    delay: anime.stagger(time/(stagesNum-1))
},0)
tl.add({
    targets: ticks,
    opacity: 1,
    duration: (time/(stagesNum-1))/3 ,
    easing: 'linear',
    delay: anime.stagger(time/(stagesNum-1))
},0)
