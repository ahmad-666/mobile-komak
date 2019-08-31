import util from '../../utilities/utilities' ;
//tabs
//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
let tabsWrapper = document.querySelector('main aside #tabs_popular') ;
let tabsTriggers = tabsWrapper.querySelectorAll('li') ;
let tabs = tabsWrapper.querySelectorAll('#tabs_content > div') ;
tabsTriggers.forEach(tabTrigger => {
    tabTrigger.addEventListener('click',activateTab) ;
})
function activateTab(e){
    tabsTriggers.forEach(tabTrigger => {
        if(this != tabTrigger) tabTrigger.classList.remove('active') ;
        else this.classList.add('active') ;
    })
    let targetTabID = this.getAttribute('data-target') ;
    tabs.forEach(tab => {
        if(tab.getAttribute('id') != targetTabID) tab.classList.remove('active') ;
        else tab.classList.add('active') ;
    })
}
//ellipses
//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
let ellipses = document.querySelectorAll('.ellipse') ;
util.checkEllipse(ellipses) ;
