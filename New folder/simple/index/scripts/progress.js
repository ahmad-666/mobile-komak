//import anime from 'animejs' ;
//import colors from '../../colors.scss' ;
let progressWrapper = document.querySelector('#progress') ;
let fillLine = progressWrapper.querySelector('.fill') ;
let icons = progressWrapper.querySelectorAll('.stage > i') ;
let texts = progressWrapper.querySelectorAll('.stage h5') ;
let circles = progressWrapper.querySelectorAll('.stage .circle') ;
let ticks = progressWrapper.querySelectorAll('.stage .circle i') ;
let stagesNum = progressWrapper.querySelectorAll('.stage').length ;
let progressTime = stagesNum*2000 ; //total time of animation --> 8000ms  
let tl = anime.timeline({
    loop: true ,
    direction: 'normal'
});
tl.add({
    targets: fillLine ,
    width: '100%' ,
    easing: 'linear' ,
    duration: progressTime ,
    endDelay: progressTime/(stagesNum-1)
},0)
tl.add({
    targets: icons,
    color: '#5d6174' ,
    duration: (progressTime/(stagesNum-1))/3 ,
    easing: 'linear',
    delay: anime.stagger(progressTime/(stagesNum-1))
},0)
tl.add({
    targets: texts,
    color: '#5d6174' ,
    duration: (progressTime/(stagesNum-1))/3 ,
    easing: 'linear',
    delay: anime.stagger(progressTime/(stagesNum-1))
},0)
tl.add({
    targets: circles,
    backgroundColor: '#1EC198',
    duration: (progressTime/(stagesNum-1))/3 ,
    easing: 'linear',
    delay: anime.stagger(progressTime/(stagesNum-1))
},0)
tl.add({
    targets: ticks,
    opacity: 1,
    duration: (progressTime/(stagesNum-1))/3 ,
    easing: 'linear',
    delay: anime.stagger(progressTime/(stagesNum-1))
},0)
