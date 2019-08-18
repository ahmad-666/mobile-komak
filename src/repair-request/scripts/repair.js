import anime from 'animejs' ;
let wrapper = document.querySelector('#request') ;
let timeline = wrapper.querySelector('#timeline') ;
let form = wrapper.querySelector('#order') ;
//radio buttons
//-----------------------------------------------------
//-----------------------------------------------------
let typeRadios = form.querySelectorAll('.slide#type input[type="radio"]') ;
let brandRadios = form.querySelectorAll('.slide#brand input[type="radio"]');
let modelRadios = form.querySelectorAll('.slide#model input[type="radio"]') ;
let colorRadios = form.querySelectorAll('.slide#color input[type="radio"]') ;

let radios = [...typeRadios,...brandRadios,...modelRadios,...colorRadios] ;
radios.forEach(radio=>{
    radio.addEventListener('click',changeSlide) ;
})
function changeSlide(elm){
    let targetID = `#${this.getAttribute('data-target')}` ;
    let target = form.querySelector(targetID) ;
    let offset = `-${parseInt(target.getAttribute('data-move'))*100}%` ;

    form.style.right = offset ;
}
//problems section
//-----------------------------------------------------
//-----------------------------------------------------
let problemCheckboxes = form.querySelectorAll('.slide#problem input[type="checkbox"]') ;
problemCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('input',checkboxHandler) ;
})
function checkboxHandler(e){
    this.parentElement.querySelector('i').classList.toggle('show') ;
}
let problemBtn = form.querySelector('.slide#problem .btn-wrapper button.next') ;
problemBtn.addEventListener('click',problemHandler) ;
function problemHandler(e){
    let problemsNum = form.querySelectorAll('.slide#problem label i.show').length ;
    let error = form.querySelector('.slide#problem p.error') ;
    if(problemsNum>0) {
        error.classList.remove('show') ;
        let targetID = `#${this.getAttribute('data-target')}` ;
        let target = form.querySelector(targetID) ;
        let offset = `-${parseInt(target.getAttribute('data-move'))*100}%` ;
        form.style.right = offset ;    
    }
    else {
        error.classList.add('show') ;
    }
}
//infos section
//-----------------------------------------------------
//-----------------------------------------------------
//enter mobile
let infosWrapper = form.querySelector('.slide#infos') ;
let infos = infosWrapper.querySelectorAll('.info') ;
let sendCodeBtn = infosWrapper.querySelector('.info.mobile .btn-wrapper button.next') ;
let mobileNum = infosWrapper.querySelector('.info.mobile input[type="number"]');
sendCodeBtn.addEventListener('click',function(e){
    if(mobileNum.value.length>6){
        mobileNum.classList.remove('error') ;
        let targetClass = `${this.getAttribute('data-target')}` ;
        let target = infosWrapper.querySelector(`.info.${targetClass}`) ;
        showInfo(target) ;
    }
    else{
        mobileNum.classList.add('error') ;
    }
})
function showInfo(elm){
    infos.forEach(info => {
        if(info!=elm) info.classList.remove('show') ;
        else info.classList.add('show') ;
    })
}
//enter code
let codeBtn = infosWrapper.querySelector('.info.code .btn-wrapper button.next') ;
let codeInput = infosWrapper.querySelector('.info.code input[type="number"]') ;
let errorText = infosWrapper.querySelector('.info.code > p.error') ;
console.log(errorText)
let code = 123 ;
codeBtn.addEventListener('click',function(e){
    if(codeInput.value == code && (minute.textContent!=0 || second.textContent!=0)){
        codeInput.classList.remove('error') ;
        errorText.classList.remove('show') ;
        let targetClass = `${this.getAttribute('data-target')}` ;
        let target = infosWrapper.querySelector(`.info.${targetClass}`) ;
        showInfo(target) ;
    }
    else{
        codeInput.classList.add('error') ;
        errorText.classList.add('show') ;
    }
})
//timer 
let minute = infosWrapper.querySelector('.info.code .minute');
let second =infosWrapper.querySelector('.info.code .second') ;
let clearTimer = setInterval(()=>{
    second.textContent-- ;
    if(second.textContent<10) second.textContent = `0${second.textContent}` ;
    else second.textContent = `${second.textContent}` ;
    if(second.textContent == 0){
        minute.textContent-- ;
        second.textContent = 59 ;
        if(minute.textContent == -1){
            minute.textContent = 0 ;
            second.textContent = `00` ;
            clearInterval(clearTimer) ;
        }
    }
},1000) ;
//resend code
//enter city
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
infosWrapper.querySelectorAll('.info.city .select').forEach(select => {
    selects.push(new Select(select)) ;
})
let cityBtn = infosWrapper.querySelector('.info.city .btn-wrapper button.next') ;
cityBtn.addEventListener('click',cityHandler) ;
let cityError = infosWrapper.querySelector('.info.city > p.error') ;
let city = infosWrapper.querySelector('.info.city input[type="text"]#city');
let state = infosWrapper.querySelector('.info.city input[type="text"]#state');
function cityHandler(e){
    let cityEnter = false ;
    let stateEnter = false ;
    if(city.value) cityEnter = true ;
    if(state.value) stateEnter = true ;
    if(cityEnter && stateEnter) {
        cityError.classList.remove('show') ;
        let targetClass = this.getAttribute('data-target') ;
        let target = infosWrapper.querySelector(`.info.${targetClass}`) ;
        showInfo(target) ;
    }
    else{
        cityError.classList.add('show') ;
    }
}
//enter name
let nameInput = infosWrapper.querySelector('.info.name input[type="text"]#name') ;
let nameBtn = infosWrapper.querySelector('.info.name .btn-wrapper button.next') ;
let discountCheckbox = infosWrapper.querySelector('.info.name input[type="checkbox"]#discount') ;
let discountInput = infosWrapper.querySelector('.info.name input[type="text"]#discount_code') ;
discountCheckbox.addEventListener('change',discountHandler) ;
function discountHandler(e){
    discountInput.classList.toggle('show') ;
}
nameBtn.addEventListener('click',nameHandler) ;
function nameHandler(e){
    if(nameInput.checkValidity()){
        nameInput.classList.remove('error') ; 
        let targetID = `#${this.getAttribute('data-target')}` ;
        let target = form.querySelector(targetID) ;
        let offset = `-${target.getAttribute('data-move')*100}%` ;
        form.style.right = offset ;
    }
    else if(nameInput.validity.valueMissing){
        nameInput.classList.add('error') ; 
    }
}
//analyse section
//-----------------------------------------------------
//-----------------------------------------------------
// let analyseBtn = form.querySelector('.slide#analyse .btn-wrapper button.') ;
// analyseBtn.addEventListener('click',analyseHandler) ;
// function analyseHandler(e){
//     let targetID = `#${this.getAttribute('data-target')}` ;
//     let target = form.querySelector(targetID) ;
//     let offset = `-${target.getAttribute('data-move')*100}%` ;
//     form.style.right = offset ; 
// }
let analyseBtn = form.querySelector('.slide#analyse > button') ;
analyseBtn.addEventListener('click',analyseHandler) ;
function analyseHandler(e){
    let targetID = `#${this.getAttribute('data-target')}` ;
    let target = form.querySelector(targetID) ;
    let offset = `-${target.getAttribute('data-move')*100}%` ;
    form.style.right = offset ; 
}
//prev button
//-----------------------------------------------------
//-----------------------------------------------------
let prevBtnsID = form.querySelectorAll('.slide > .btn-wrapper button.prev') ;
prevBtnsID = [...prevBtnsID] ;
prevBtnsID.push(form.querySelector('.info.mobile .btn-wrapper button.prev'))
prevBtnsID.forEach(prevBtn => {
    prevBtn.addEventListener('click',prevHandlerID) ;
})
function prevHandlerID(e){
    let currPos = parseInt(form.style.right) ;
    let offset = currPos + 100 ;
    form.style.right = `${offset}%` ;
}

let codePrev =infosWrapper.querySelector('.info.code .btn-wrapper button.prev');
let cityPrev =infosWrapper.querySelector('.info.city .btn-wrapper button.prev');
let namePrev =infosWrapper.querySelector('.info.name .btn-wrapper button.prev');
let prevs = [codePrev,cityPrev,namePrev] ;
prevs.forEach(prev => {
    prev.addEventListener('click',e=>{
        let targetClass = prev.getAttribute('data-target') ;
        let target = infosWrapper.querySelector(`.${targetClass}`)
        showInfo(target) ;
    })
    
})