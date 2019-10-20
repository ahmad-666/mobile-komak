// let navbar = document.querySelector('nav') ;
// window.addEventListener('scroll',e=>{
//     if(window.scrollY > navbar.clientHeight) navbar.classList.add('fix-style') ;
//     else navbar.classList.remove('fix-style') ;
// })
let navMobile = document.querySelector('nav') ;
let mobileNav = navMobile.querySelector('li.mobile') ;
let mobileMenu = mobileNav.querySelector('ul.mobile_nav') ;
let mobilDropTrigger = mobileMenu.querySelector('li.dropdownTrigger') ;
let mobilDrop = mobilDropTrigger.querySelector('.dropdownMenu') ;
mobileNav.addEventListener('click',toggleNav) ;
function toggleNav(e){
    e.stopPropagation();
    mobileMenu.classList.toggle('show') ;
    if(mobileMenu.classList.contains('show')){
        document.addEventListener('click',mobileDocHandler) ;
    }
    else{
        mobilDrop.classList.remove('show') ;
    }
}
function mobileDocHandler(e){
    e.stopPropagation() ;
    let clickedElm = e.target ;
    if(!mobileNav.contains(clickedElm)){
        mobileMenu.classList.remove('show') ;
        mobilDrop.classList.remove('show') ;
        document.removeEventListener('click',mobileDocHandler) ;
    }
}
mobilDropTrigger.addEventListener('click',function(e){
    e.stopPropagation() ;
    mobilDrop.classList.toggle('show') ;
})
