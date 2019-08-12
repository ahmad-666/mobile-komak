let navbar = document.querySelector('nav') ;
window.addEventListener('scroll',e=>{
    if(window.scrollY > navbar.clientHeight) navbar.classList.add('fix-style') ;
    else navbar.classList.remove('fix-style') ;
})