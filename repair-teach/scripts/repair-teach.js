let getStyle = (elm,prop) => window.getComputedStyle(elm,'null').getPropertyValue(prop) ;
//slider
let wrapper = document.querySelector('form#teach') ;
let slider = wrapper.querySelector('.slides') ;
let slide = slider.querySelector('.slide') ;
let labels = slider.querySelectorAll('label') ;
labels.forEach(label => {
    label.addEventListener('click',nextSlide) ;
})
function nextSlide(e){
    let currPos = parseFloat(getStyle(slider,'right')) ;
    let offset = currPos - slide.clientWidth ;
    slider.style.right = `${offset}px`
}
let prevBtns = slider.querySelectorAll('button.prev') ;
prevBtns.forEach(prevBtn => {
    prevBtn.addEventListener('click',prevSlide) ;
})
function prevSlide(e){
    let currPos = parseFloat(getStyle(slider,'right')) ;
    let offset = currPos + slide.clientWidth ;
    slider.style.right = `${offset}px` ;
}
//ellipse
let ellipses = document.querySelectorAll('.ellipse') ;
ellipses.forEach(ellipse => {
    let parent = ellipse.parentElement ;
    let threshold = parseInt(window.getComputedStyle(parent,null).getPropertyValue('max-height'));
    if(parent.scrollHeight > threshold) ellipse.style.display = 'block' ;
})