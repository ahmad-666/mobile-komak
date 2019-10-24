//select2---------------------------------
//select2---------------------------------
//select2---------------------------------
$('.select2').select2(); //init select2
//change AlertMsg
$('.select2').on('select2:open', function (e) {
    let inputs = document.querySelectorAll('input[type="search"].select2-search__field') ;
    inputs.forEach(input => {
        input.addEventListener('input',changeAlertMsg) ;
    })
});
function changeAlertMsg(e){
    let alerts = document.querySelectorAll('li[role="alert"]') ;
    alerts.forEach(alert => {
        alert.classList.add('alert') ;
        alert.textContent = "موردی یافت نشد" ; 
    })
}
//-------------------------------
//-------------------------------
//-------------------------------
let requestWrapper = document.querySelector('#request') ;
let requestFormWrapper = requestWrapper.querySelector('form#request_info') ;
//move to next/prev slide 
let nextSlideHandlers = requestFormWrapper.querySelectorAll('.nextSlide') ;
let prevSlideHandlers = requestFormWrapper.querySelectorAll('.prevSlide') ;
nextSlideHandlers.forEach(nextSlideHandler => {
    nextSlideHandler.addEventListener('click',moveSlider) ;
})
prevSlideHandlers.forEach(prevSlideHandler => {
    prevSlideHandler.addEventListener('click',moveSlider) ;
})
function moveSlider(e){
    if(this.classList.contains('nextSlide')){//move to next slide
        if(this == problemNextSlideBtn) { //if we hit nextSlide button inside .slide#select_problem          
            if(problemWrapper.querySelectorAll('i.fa-check.show').length>0){
                console.log('fdsf') ;
                problemError.classList.remove('show') ;
                nextSlide();
                moveLine('forward') ; 
                clearInterval(clearTimer) ;
                initTimer();
            }
            else problemError.classList.add('show') ;                 
        }
        else if(this == dontKnow) { //if we click on dont_know problem
            problemError.classList.remove('show') ;
            nextSlide();   
            moveLine('forward') ; 
            clearInterval(clearTimer) ;
            initTimer() ;
        }
        else if(this == infoNextSlide){
            if(info2Validate()) {
                nextSlide();     
                moveLine('forward') ; 
            }         
        }
        else if(this == confirmNextSlide){
            if(rulesCheckbox.checked) {
                confirmError.classList.remove('show') ;
                nextSlide() ;
                moveLine('forward') ; 
            }
            else confirmError.classList.add('show') ;
        }
        else {
            nextSlide();  
            //if(!this.classList.contains('static_timeline')) 
            moveLine('forward') ;   
        }
    }
    else if(this.classList.contains('prevSlide')) { //move to prev slide 
        prevSlide(); 
        //if(!this.classList.contains('static_timeline')) 
        moveLine('backward') ; 
    }
}
function nextSlide(){
    let currPost = parseFloat(requestFormWrapper.style.right) ;
    requestFormWrapper.style.right = `${currPost-100}%` ;
}
function prevSlide(){
    let currPost = parseFloat(requestFormWrapper.style.right) ;
    requestFormWrapper.style.right = `${currPost+100}%` ;
}
//.slide#select_problem checkboxes
let problemWrapper = requestFormWrapper.querySelector('.slide#select_problem') ;
let problemCheckboxes = problemWrapper.querySelectorAll('input[type="checkbox"]') ;
let problemNextSlideBtn = problemWrapper.querySelector('.btn-wrapper button.nextSlide') ;
let problemError = problemWrapper.querySelector('p.error') ;
let dontKnow = problemWrapper.querySelector('.nextSlide#dont_know') ;
problemCheckboxes.forEach(problemCheckbox => {
    problemCheckbox.addEventListener('click',problemCheckboxesHandler) ;
})
function problemCheckboxesHandler(e){
    let label = this.parentElement ;
    let icon = label.querySelector('i') ;
    icon.classList.toggle('show') ;
}
//code timer 
let infoWrapper = requestFormWrapper.querySelector('.slide#select_info') ;
let timerWrapper = infoWrapper.querySelector('#timer') ;
let minuteElm = timerWrapper.querySelector('.minute');
let secondElm = timerWrapper.querySelector('.second') ;
let minute = null ;
let second = null ;
let clearTimer = null ;
function initTimer(){
    minute = 2 ;
    second = 59 ;
    if(second<10) secondElm.textContent = `0${second}` ;
    else secondElm.textContent = `${second}` ;
    minuteElm.textContent = `${minute}` ;
    clearTimer = setInterval(()=>{
        second-- ;
        if(second<10) secondElm.textContent = `0${second}` ;
        else secondElm.textContent = `${second}` ;
        if(second == 0){
            minute-- ;
            second = 59 ;
            if(minute != -1){
                minuteElm.textContent = `${minute}` ;
                secondElm.textContent = `${second}` ;               
            }
            else{
                minuteElm.textContent = `0`  ;
                secondElm.textContent = `00` ;
                clearInterval(clearTimer) ;
            }
        }
    },1000) ;
}
//user input validation 
let mobileInput = infoWrapper.querySelector('#mobile_num') ;
let code = 123 ;
function get_code($code){
     code = $code ;
}
let codeInput = infoWrapper.querySelector('#code') ;
let codeWrapper = codeInput.parentElement ;
let codeWrapperHeight = codeWrapper.offsetHeight ;
codeWrapper.classList.add('hide') ;
let nameInput = infoWrapper.querySelector('#name') ;
let stateInput = infoWrapper.querySelector('#state') ;
let cityInput = infoWrapper.querySelector('#city') ;
//prevent input[type="number"] to accept 'e' and 'E'
let numbers = requestFormWrapper.querySelectorAll('input[type="number"]') ;
fixInputNumber(numbers) ;
function fixInputNumber(numbers){
    numbers.forEach(number => {
        number.addEventListener('keypress',justAcceptNumber) ;
    })
}
function justAcceptNumber(e){
    if(e.key =='e' || e.key=='E')e.preventDefault(); 
}
//tabs handler 
let tabs = infoWrapper.querySelectorAll('.tab') ;
let nextTabHandlers = infoWrapper.querySelectorAll('.btn-wrapper button.nextTab') ;
let prevTabHandlers = infoWrapper.querySelectorAll('.btn-wrapper button.prevTab') ;
let info1 = infoWrapper.querySelector('#info_1') ;
let info1NextTab = info1.querySelector('.btn-wrapper button.nextTab') ;
let infoNextSlide = infoWrapper.querySelector('.btn-wrapper .nextSlide') ;
nextTabHandlers.forEach(nextSlideHandler => {
    nextSlideHandler.addEventListener('click',tabHandler) ;
})
prevTabHandlers.forEach(prevTabHandler => {
    prevTabHandler.addEventListener('click',tabHandler) ;
})
function tabHandler(e){
    if(this == info1NextTab){
        if(mobileValidate()) {
            codeWrapper.classList.add('addTransition') ;
            codeWrapper.classList.remove('hide') ;
            codeWrapper.style.height = `${codeWrapperHeight}px` ;
            info1NextTab.style.display = 'none';  
            codeInput.addEventListener('input',monitorCode) ;
        }
    }
    else{       
        changeTab(this.getAttribute('data-target')) ;
        clearInterval(clearTimer) ;
        initTimer() ;
    }
}
function mobileValidate(){
    if(mobileInput.value.length == 11 && mobileInput.value[0]=='0' && mobileInput.value[1]=='9') {
        mobileInput.classList.remove('error') ;
        mobileInput.removeEventListener('input',monitorMobile) ;
        return true ;
    }
    else {
        mobileInput.classList.add('error') ;
        mobileInput.addEventListener('input',monitorMobile) ;
    }
}
function monitorMobile(e){
    if(mobileInput.value.length != 11 || mobileInput.value[0]!='0' || mobileInput.value[1]!='9') mobileInput.classList.add('error') ;
    else mobileInput.classList.remove('error') ;
}
function codeValidate(){
    if(codeInput.value == code && (parseInt(minuteElm.textContent)!=0 || parseInt(secondElm.textContent)!=0)){
        codeInput.classList.remove('error') ;
        codeInput.removeEventListener('input',monitorCode) ;
        return true ;
    }
    else {
        codeInput.classList.add('error') ;
        codeInput.addEventListener('input',monitorCode) ;
    }
}
function monitorCode(e){
    if(this.value == code && ( parseInt(minuteElm.textContent)!=0 || parseInt(secondElm.textContent)!=0 )){
        //this.classList.remove('error') ;
        changeTab(info1NextTab.getAttribute('data-target')) ;
    }
    // else{
    //     this.classList.add('error') ;
    // }
}
function info2Validate(){
    if(nameValidate() && stateValidate() && cityValidate()){
        return true ;
    }
}
function nameValidate(){
    if(nameInput.value.length>0){
        nameInput.classList.remove('error') ;
        nameInput.removeEventListener('input',monitorName) ;
        return true ;
    }
    else{
        nameInput.classList.add('error') ;
        nameInput.addEventListener('input',monitorName) ;
    }
}
function monitorName(e){
    if(nameInput.value.length>0) nameInput.classList.remove('error') ;
    else nameInput.classList.add('error') ;
}
function stateValidate(){
    if(stateInput.value.length>0){
        stateInput.classList.remove('error') ;
        //stateInput.removeEventListener('input',monitorState) ;
        return true ;
    }
    else{
        stateInput.classList.add('error') ;
        //stateInput.addEventListener('input',monitorState) ;
    }
}
// function monitorState(e){
//     if(stateInput.value.length>0) stateInput.classList.remove('error') ;
//     else stateInput.classList.add('error') ;
// }
function cityValidate(){
    if(cityInput.value.length>0){
        cityInput.classList.remove('error') ;
        //cityInput.removeEventListener('input',monitorCity) ;
        return true ;
    }
    else{
        cityInput.classList.add('error') ;
        //cityInput.addEventListener('input',monitorCity) ;
    }
}
// function monitorCity(e){
//     if(cityInput.value.length>0) cityInput.classList.remove('error') ;
//     else cityInput.classList.add('error') ;
// }
function changeTab(targetID){
    let targetTab = infoWrapper.querySelector(`#${targetID}`) ;
    tabs.forEach(tab => {
        if(targetTab == tab) tab.classList.add('show') ;
        else tab.classList.remove('show') ;
    })
}
//selects
function Select(elm){
    this.elm = elm ;
    this.input = this.elm.querySelector('input[type="text"]') ;
    this.hiddenInput = this.elm.querySelector('input[type="hidden"]')

    this.ul = this.elm.querySelector('ul') ;
    this.lis = this.ul.querySelectorAll('li') ;
    this.initList = [...this.lis] ;
    this.arrow = this.elm.querySelector('i.fa-angle-down') ;
    this.input.addEventListener('click',this.inputHandler.bind(this));
    this.arrow.addEventListener('click',this.inputHandler.bind(this));
    //this.otherSelects = otherSelects ;
    this.input.addEventListener('input',this.search.bind(this)) ;
    this.input.addEventListener('blur',this.loseFocus.bind(this)) ;
}
Select.prototype.inputHandler = function(e){
    e.stopPropagation();
    document.addEventListener('click',this) ;
    let val = this.input.value;
    if(!val.match(/\S{1,}/gi)) this.createList(this.initList) ;
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
        this.input.classList.remove('error');
        this.hiddenInput.value = currLi.getAttribute('data-value') ;
        this.ul.classList.remove('show') ;
        document.removeEventListener('click',this) ;
        this.lis.forEach(li => {
            li.removeEventListener('click',this) ;
        })
    }
}
Select.prototype.search = function(e){
    let val = this.input.value ;
    //if we enter anything rather than white-space
     //if we have any result we enter this block
    if(val.match(/\S{1,}/gi)){      
         this.lis = this.initList.filter(li => {
             if(li.textContent.startsWith(val)) return li ;
         })      
     }
     //if we don't have any result we enter this block
     else this.lis = [...this.initList] ;  
     this.createList(this.lis) ;
 }
 Select.prototype.loseFocus = function(e){
     let val = this.input.value ;
     let find = false ;
     for(let i=0 ; i<this.lis.length ; i++){
         let li = this.lis[i] ;
         if(li.textContent == val){
             find = true ;
             break ;
         }
     }
     if(!find) {
         this.input.value = '' ;  
     } 
    
 }
 Select.prototype.createList = function(lis){
     this.ul.innerHTML = '' ;
     lis.forEach(li => {
         this.ul.appendChild(li) ;
     })
 }
let selects = [] ;
infoWrapper.querySelectorAll('.input_wrapper.select').forEach(select => {
    //selects.push(new Select(select)) ;
})
//resend code
let resend = infoWrapper.querySelector('#resend') ;
resend.addEventListener('click',e=>{
    clearInterval(clearTimer) ;
    initTimer() ;
})
//discount checkbox 
let discountCheckbox = infoWrapper.querySelector('input[type="checkbox"]#discount');
let discountCode = infoWrapper.querySelector('input[type="text"]#discount_code') ;
discountCheckbox.addEventListener('click',toggleDiscount) ;
function toggleDiscount(e){
    discountCode.classList.toggle('show') ;
}
//confirm 
let confirmWrapper = requestFormWrapper.querySelector('.slide#confirm') ; 
let rulesCheckbox = confirmWrapper.querySelector('input[type="checkbox"]') ;
let confirmNextSlide = confirmWrapper.querySelector('button.nextSlide') ;
let confirmError = confirmWrapper.querySelector('p.error') ;
//timeline 
let timeline = requestWrapper.querySelector('#timeline') ;
let line = timeline.querySelector('.line') ;
let fillLine = timeline.querySelector('.fill_line') ;
if(window.innerWidth>350){
    fillLine.style.width = '0%' ;
    fillLine.style.height = '' ;
}
else if(window.innerWidth<=350){
    fillLine.style.width = '' ;
    fillLine.style.height = '0%' ;
}
let circles = timeline.querySelectorAll('.circle') ;
let circleIndex = 0 ;
function moveLine(dir){
    if(window.innerWidth>350){
        let currWidth = parseFloat(fillLine.style.width) ;
        let offset = Math.round(100/7) ;
        if(dir == 'forward'){
            fillLine.style.width = `${currWidth+offset}%` ;
            circleIndex++ ;
            circles[circleIndex].classList.add('active') ; 
        }
        else if(dir = 'backward'){
            circles[circleIndex].classList.remove('active') ; 
            circleIndex-- ;
            fillLine.style.width = `${currWidth-offset}%` ;
        }
    }
    else if(window.innerWidth<=350){
        let currHeight = parseFloat(fillLine.style.height) ;
        let offset = Math.round(100/7) ;
        if(dir == 'forward'){
            fillLine.style.height = `${currHeight+offset}%` ;
            circleIndex++ ;
            circles[circleIndex].classList.add('active') ; 
        }
        else if(dir = 'backward'){
            circles[circleIndex].classList.remove('active') ; 
            circleIndex-- ;
            fillLine.style.height = `${currHeight-offset}%` ;
        }
    }
    
}

