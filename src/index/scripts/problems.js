let problemWrapper = document.querySelector('#problems') ;
let problemTabTriggers = problemWrapper.querySelectorAll('ul li') ;
let problemTabWrapper = problemWrapper.querySelector('.tabs_wrapper') ;
let problemTabs = problemWrapper.querySelectorAll('.tab') ;
problemTabTriggers.forEach(trigger => {
    trigger.addEventListener('click',openProblemTab) ;
})
function openProblemTab(e){
    let targetID = this.getAttribute('data-target') ;
    let targetTab = problemTabWrapper.querySelector(`#${targetID}`) ;
    problemTabWrapper.classList.add('show') ;
    if(window.innerWidth<=450){
        problemTabWrapper.addEventListener('click',closeWrapper) ;
    }
    problemTabs.forEach(tab => {
        if(tab == targetTab) {
            tab.classList.add('active') ;
        }
        else {
            tab.classList.remove('active') ;
        }
    })
}
function closeWrapper(e){
    problemTabWrapper.classList.remove('show') ;
}