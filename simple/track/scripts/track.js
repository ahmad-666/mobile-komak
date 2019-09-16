let trackForm = document.querySelector('form#track') ;
let trackCode = trackForm.querySelector('#track_code') ;
let trackError = trackForm.querySelector('p.error') ;
trackForm.addEventListener('submit',e=>{
    e.preventDefault() ;
    if(trackValidate()) trackForm.submit() ;
})
function trackValidate(){
    if(trackCodeValidate()) {
        trackError.classList.remove('show') ;
        return true ;
    }
    else  trackError.classList.add('show') ;
}
function trackCodeValidate(){
    if(trackCode.checkValidity()) {
        trackCode.classList.remove('error') ;
        return true ;
    }
    else trackCode.classList.add('error') ;
}
