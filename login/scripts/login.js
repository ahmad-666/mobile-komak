let loginForm = document.querySelector('form#login') ;
let username = loginForm.querySelector('#username') ;
let password = loginForm.querySelector('#password') ;
let errorText = loginForm.querySelector('p.error') ;
loginForm.addEventListener('submit',e=>{
    e.preventDefault() ;
    if(loginValidate()) loginForm.submit() ;
})
function loginValidate(){
    if(usernameValidate() && passwordValidate()) {
        errorText.classList.remove('show') ;
        return true ;
    }
    else  errorText.classList.add('show') ;
}
function usernameValidate(){
    if(username.checkValidity()) {
        username.classList.remove('error') ;
        return true ;
    }
    else username.classList.add('error') ;
}
function passwordValidate(){
    if(password.checkValidity()) {
        password.classList.remove('error') ;
        return true ;
    }
    else password.classList.add('error') ;
}