let rssForm = document.forms['newsletters'] ;
let email = rssForm['email'] ;
rssForm.addEventListener('submit',checkValidation) ;
function checkValidation(e){
    e.preventDefault();
    if(emailValidate()) rssForm.submit() ;
}
function emailValidate(){
    if(email.checkValidity()) {
        email.parentElement.querySelector('p.error').classList.remove('show') ;
        email.removeEventListener('input',valueMissingHandler) ;
        email.removeEventListener('input',typeMismatchHandler) ;
        return true ;
    }
    else if(email.validity.valueMissing) {
        email.parentElement.querySelector('p.error').classList.add('show') ;
        email.addEventListener('input',valueMissingHandler) ;
    }
    else if(email.validity.typeMismatch) {
        email.parentElement.querySelector('p.error').classList.add('show') ;
        email.addEventListener('input',typeMismatchHandler) ;
    }
}
function valueMissingHandler(e){
    if(email.validity.valueMissing){
        email.parentElement.querySelector('p.error').classList.add('show') ;
    }
    else{
        email.parentElement.querySelector('p.error').classList.remove('show') ;
    }
}
function typeMismatchHandler(e){
    if(email.validity.typeMismatch){
        email.parentElement.querySelector('p.error').classList.add('show') ;
    }
    else{
        email.parentElement.querySelector('p.error').classList.remove('show') ;
    }
}