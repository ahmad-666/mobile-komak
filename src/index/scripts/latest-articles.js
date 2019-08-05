import anime from 'animejs' ;
let getStyle = (el,prop) => window.getComputedStyle(el,null).getPropertyValue(prop) ;
function Slider(slider){
    this.slider = slider ;
    this.slide = this.slider.querySelector('.article') ;
    this.offset = parseInt(getStyle(this.slide,'width')) + parseInt(getStyle(this.slide,'margin-right')) + parseInt(getStyle(this.slide,'margin-left')) ;
    this.movement = 0 ;
    this.slidesNum = this.slider.querySelectorAll('.article').length ;
    this.slidesInViewport = Math.floor(window.innerWidth / this.offset) ;
    this.currSlideIndex = this.slidesInViewport ; //start from 1
    this.firstSlide = true ;
    this.lastSlide = false ;
    this.prevBtn = this.slider.parentElement.querySelector('button.prev') ;
    this.nextBtn = this.slider.parentElement.querySelector('button.next') ;
    this.prevBtn.addEventListener('click',this.prevSlide.bind(this));
    this.nextBtn.addEventListener('click',this.nextSlide.bind(this));
}
Slider.prototype.prevSlide = function(e){
    if(this.currSlideIndex == this.slidesInViewport) this.firstSlide = true ;
    else this.firstSlide = false ;
    if(!this.firstSlide){
        this.currSlideIndex-- ;   
        this.movement-=this.offset ;
        this.animation(-this.movement,400) ;
    }
    else{
        this.currSlideIndex = this.slidesNum  ;   
        this.movement = ((this.slidesNum*this.offset)-window.innerWidth>0) ? ((this.slidesNum*this.offset)-window.innerWidth) : (0) ; 
        this.animation(-this.movement,1000) ;
    }   
}
Slider.prototype.nextSlide = function(e){
    if(this.currSlideIndex == this.slidesNum) this.lastSlide = true ;
    else this.lastSlide = false ;
    if(!this.lastSlide){
        this.currSlideIndex++ ;   
        this.movement+=this.offset ;
        this.animation(-this.movement,400) ;
    }
    else{
        this.currSlideIndex = this.slidesInViewport ;   
        this.movement = 0 
        this.animation(this.movement,1000) ;
    }  
}
Slider.prototype.animation = function(val,time){
    anime({
        targets: this.slider ,
        duration: time,
        right: val ,
        easing:'linear',
        direction:'normal',
        loop:1 
    })
}
new Slider(document.querySelector('#latest-articles .articles')) ;