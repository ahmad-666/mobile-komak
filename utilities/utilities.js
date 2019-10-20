let getStyle = (el,prop) => window.getComputedStyle(el,null).getPropertyValue(prop) ;
function checkEllipse(elms){
    elms.forEach(elm => {
        let parent = elm.parentElement;
        let threshold = parseFloat(window.getComputedStyle(parent,null).getPropertyValue('max-height')) ;
        if(parent.scrollHeight > threshold) elm.style.display = "block" ;
    })
}
function ScrollArrows(wrapper){
    this.wrapper = wrapper ; 
    this.arrows = this.wrapper.querySelector('.arrows') ;
    //each time we need to set new this.parent/this.children
    this.parent = this.wrapper.querySelector('.tabs') ;
    this.children = [...this.parent.querySelectorAll('.tab')] ;
    this.checkThreshold() ;
    window.addEventListener('resize',this.checkThreshold.bind(this)) ;
}
ScrollArrows.prototype.checkThreshold = function(e){
	if(window.innerWidth>750) this.arrows.classList.remove('show') ;
    else{
        let contentWidth = 0 ;
        this.children.forEach(child => {
            contentWidth += child.offsetWidth ;
        })
        if(contentWidth>this.parent.offsetWidth) this.arrows.classList.add('show') ;
        else this.arrows.classList.remove('show') ;
    }
}
//export default {
//    getStyle,
//    checkEllipse,
//    ScrollArrows
//}