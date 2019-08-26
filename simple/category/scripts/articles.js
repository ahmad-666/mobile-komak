//ellipse 
let ellipses1 = document.querySelectorAll('.ellipse') ;
ellipses1.forEach(ellipse => {
    checkEllipse(ellipse) ;
})
function checkEllipse(elm){
    let parent = elm.parentElement;
    let threshold = parseFloat(window.getComputedStyle(parent,null).getPropertyValue('max-height')) ;
    if(parent.scrollHeight > threshold) elm.style.display = "block" ;
}