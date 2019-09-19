import util from '../../utilities/utilities' ;
import FontFaceObserver from 'fontfaceobserver'
var font = new FontFaceObserver('iranSans');
font.load().then(function () {
    new Tabs(tabsWrapper) ;
});
//--------------------line
//--------------------line
//--------------------line
function MovingLine(line){
    this.line = line ;
}
MovingLine.prototype.move = function(target){
    let width = null ;
    let right = null ;
    //parent of this.line and target should be same 
    width = parseFloat(target.getBoundingClientRect().width.toFixed(2)) ;
    let parentWidth = parseFloat(target.parentElement.getBoundingClientRect().width.toFixed(2)); 
    let targetLeftOffset = target.offsetLeft ;
    right = parentWidth - targetLeftOffset - width ;
    this.line.style.width = `${width}px` ;
    this.line.style.right = `${right}px` ;
}
//--------------------tabs
//--------------------tabs
//--------------------tabs
let tabsWrapper = document.querySelector('#tabs') ;
let line = tabsWrapper.querySelector('.line') ;
let tabs = tabsWrapper.querySelectorAll('ul li') ;
let lastLi = tabs[tabs.length-1] ;
let tabsContents = tabsWrapper.querySelectorAll('.tabs_content > div') ;
function Tabs(wrapper){
    this.wrapper = wrapper ;
    this.tabs = this.wrapper.querySelectorAll('.tab') ;
    this.contents = this.wrapper.querySelectorAll('.content') ;
    this.tabs.forEach(tab => {
        tab.addEventListener('click',this.openTab.bind(this)) ;
    });
    this.line = new MovingLine(this.wrapper.querySelector('.line')) ;
    this.init() ;
}
Tabs.prototype.init = function(){
    this.tabs[0].click() ;
}
Tabs.prototype.openTab = function(e){
    let targetID = null ;
    this.tabs.forEach(tab => {
        if(tab == e.currentTarget) {
            tab.classList.add('active') ;
            targetID = tab.getAttribute('data-target') ;
        }
        else tab.classList.remove('active') ;
    })
    this.contents.forEach(content => {
        if(content.getAttribute('id') == targetID) content.classList.add('active') ;
        else content.classList.remove('active') ;
    }) ;
    this.line.move(e.currentTarget) ;
}
//scrollArrows---------------------
//scrollArrows---------------------
//scrollArrows---------------------
new util.ScrollArrows(tabsWrapper) ;