let wrapper = document.querySelector('main .wrapper') ;
//play video
let videoWrapper = wrapper.querySelector('#video') ;
let video = videoWrapper.querySelector('video') ;
let content = videoWrapper.querySelector('.content') ;
let filter = videoWrapper.querySelector('.filter') ;
let playBtn = content.querySelector('.fa-play') ;
playBtn.addEventListener('click',playVideo) ;
function playVideo(e){
    filter.classList.add('hide') ;
    content.classList.add('hide') ;
    video.play() ;
}
//show more 
let descWrapper = wrapper.querySelector('.desc') ;
let showMoreBtn = descWrapper.querySelector('.show_more') ;
let desc = descWrapper.querySelector('p') ;
showMoreBtn.addEventListener('click',toggleDesc) ;
function toggleDesc(e){
    desc.classList.toggle('open');
    let text = '' ;
    let icon = document.createElement('i') ;
    icon.classList.add('fas');
    if(desc.classList.contains('open')){
        text = 'نمایش کمتر' ;
        icon.classList.add('fa-angle-up'); 
        this.textContent = text;
        this.appendChild(icon) ;
    }
    else{
        text = 'نمایش بیشتر' ;
        icon.classList.add('fa-angle-down'); 
        this.textContent = text;
        this.appendChild(icon) ;
    }
}