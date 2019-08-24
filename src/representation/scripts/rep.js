//open specialty
let specialtyWrapper = document.querySelector('#specialty .specialty');
let specialtyTriggers = specialtyWrapper.querySelectorAll('.title') ;
specialtyTriggers.forEach(specialtyTrigger => {
    specialtyTrigger.addEventListener('click',toggleSpecialty) ;
})
function toggleSpecialty(e){
    let explain = this.parentElement.querySelector('.explain') ;
    let icon = this.querySelector('i') ;
    icon.classList.toggle('fa-plus') ;
    icon.classList.toggle('fa-times') ;
    explain.classList.toggle('show') ;
    if(explain.classList.contains('show')) explain.style.height = `${explain.scrollHeight}px` ;
    else explain.style.height = `0px` ;
}
//form 
//select
function Select(elm){
    this.elm = elm ;
    this.input = this.elm.querySelector('input[type="text"]') ;
    this.ul = this.elm.querySelector('ul') ;
    this.lis = this.ul.querySelectorAll('li') ;
    this.arrow = this.elm.querySelector('i.fa-angle-down') ;
    this.input.addEventListener('click',this.inputHandler.bind(this));
    this.arrow.addEventListener('click',this.inputHandler.bind(this));
}
Select.prototype.inputHandler = function(e){
    e.stopPropagation();
    document.addEventListener('click',this) ;
    this.ul.classList.add('show') ;
    this.lis.forEach(li => {
        li.addEventListener('click',this) ;
    })
    selects.forEach(select => {
        if(select!=this) select.ul.classList.remove('show') ;
    })
}
Select.prototype.handleEvent = function(e){
    e.stopPropagation();
    if(e.currentTarget == document){
        let clickedElm = e.target ;
        if(!this.ul.contains(clickedElm)){
            selects.forEach(select => {
                select.ul.classList.remove('show') ;
                select.lis.forEach(li => {
                    li.removeEventListener('click',this);
                })
            })
            document.removeEventListener('click',this) ;
        }
    }
    else{
        let currLi = e.currentTarget ;
        this.input.value = currLi.textContent ;
        this.ul.classList.remove('show') ;
        document.removeEventListener('click',this) ;
        this.lis.forEach(li => {
            li.removeEventListener('click',this) ;
        })
    }
}
let selects = [] ;
let form = document.querySelector('form#request') ;
form.querySelectorAll('.inputs .select').forEach(select => {
    selects.push(new Select(select)) ;
})
//form validation
let name = form.querySelector('#name') ;
let tel = form.querySelector('#tel') ;
let state = form.querySelector('#state') ;
let city = form.querySelector('#city') ;
let address = form.querySelector('#address') ;
form.addEventListener('submit',submitForm) ;
function submitForm(e){
    e.preventDefault();
    if(formValidation()) this.submit() ;
}
function formValidation(){
    return (validateName()&&validateTel()&&validateState()&&validateCity()&&validateAddress());
}
function validateName(){
    if(name.checkValidity()){
        name.classList.remove('error') ;
        name.removeEventListener('input',nameMonitor) ;
        return true ;
    }
    else {
        name.classList.add('error') ;
        name.addEventListener('input',nameMonitor) ;
    }
}

function validateTel(){
    if(tel.checkValidity()){
        tel.classList.remove('error') ;
        tel.removeEventListener('input',telMonitor) ;
        return true ;
    }
    else {
        tel.classList.add('error') ;
        tel.addEventListener('input',telMonitor) ;
    }
}
function validateState(){
    if(state.value.length>0){
        state.classList.remove('error') ;
        state.removeEventListener('input',stateMonitor) ;
        return true ;
    }
    else {      
        state.classList.add('error') ;
        state.addEventListener('input',stateMonitor) ;
    }
}
function validateCity(){
    if(city.value.length>0){
        city.classList.remove('error') ;
        city.removeEventListener('input',cityMonitor) ;
        return true ;
    }
    else {
        city.classList.add('error') ;
        city.addEventListener('input',cityMonitor) ;
    }
}
function validateAddress(){
    if(address.checkValidity()){
        address.classList.remove('error') ;
        address.removeEventListener('input',addressMonitor) ;
        return true ;
    }
    else {
        address.classList.add('error') ;
        address.addEventListener('input',addressMonitor) ;
    }
}
function nameMonitor(e){
    if(name.checkValidity()) this.classList.remove('error') ;
    else this.classList.add('error') ;
}
function telMonitor(e){
    if(tel.checkValidity()) this.classList.remove('error') ;
    else this.classList.add('error') ;
}
function stateMonitor(e){
    if(state.checkValidity()) this.classList.remove('error') ;
    else this.classList.add('error') ;
}
function cityMonitor(e){
    if(city.checkValidity()) this.classList.remove('error') ;
    else this.classList.add('error') ;
}
function addressMonitor(e){
    if(address.checkValidity()) this.classList.remove('error') ;
    else this.classList.add('error') ;
}