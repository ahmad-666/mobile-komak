let tabsWrapper = document.querySelector('#tabs') ;
let line = tabsWrapper.querySelector('.line') ;
let tabs = tabsWrapper.querySelectorAll('ul li') ;
let lastLi = tabs[tabs.length-1] ;
let tabsContents = tabsWrapper.querySelectorAll('.tabs_content > div') ;
tabs.forEach(tab => {
    tab.addEventListener('click',activateTab) ;
});
function getChildIndex(child){
    let index = null ;
    let parent = child.parentElement ;
    let children = parent.children ;
    children = [...children] ;
    children.forEach((c,i) => {
        if(c==child)  index = i ;
    })
    return index ;
}
function activateTab(e){
    //activate tab
    tabs.forEach(tab => {       
        if(tab!=this) tab.classList.remove('active') ;
        else tab.classList.add('active') ;
    })
    //move line
    let lineOffset= getChildIndex(this)*parseFloat(getStyle(this,'width'))  ;
    if(this==lastLi) line.style.width = `calc(20%)` ; 
    else line.style.width = `calc(20% + 1.2px + .2px)` ;
    line.style.right = `${lineOffset}px` ;
    //appear tab content
    let currTabContentID = this.getAttribute('data-target') ;
    tabsContents.forEach(content => {
        if(content.getAttribute('id') == currTabContentID) content.classList.add('active') ;
        else content.classList.remove('active') ;
    })
}