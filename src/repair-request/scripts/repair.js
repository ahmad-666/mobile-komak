let wrapper = document.querySelector('#request') ;
let form = wrapper.querySelector('#order') ;
let problemWrapper = form.querySelector('.slide#problem') ;
let infosWrapper = form.querySelector('.slide#infos') ;
let infos = infosWrapper.querySelectorAll('.info') ;
//next/prev slides
//-----------------------------------------------------
//-----------------------------------------------------
let nextSlideTriggers = form.querySelectorAll('.nextSlide') ;
let problemNextBtn = form.querySelector('.slide#problem .nextSlide');
let nameNextBtn = infosWrapper.querySelector('.info.name .nextSlide') ;
let modelRadios = form.querySelectorAll('.slide#model .nextSlide') ;
let colorPrevBtn = form.querySelector('.slide#color .prevSlide') ;
let analyseNextBtn = form.querySelector('.slide#analyse .nextSlide') ;
nextSlideTriggers.forEach(trigger => {
    trigger.addEventListener('click',nextSlideHandler);
})
function nextSlideHandler(e){
    if(this == problemNextBtn){
        if(problemWrapper.querySelectorAll('i.fa-check.show').length>0){
            problemWrapper.querySelector('p.error').classList.remove('show') ;
            let currPos = parseInt(form.style.right) ;
            let offset = currPos-100 ;
            form.style.right = `${offset}%`;
            lineAnimation('forward') ;
            currStep++ ;
            tickHandler()
        }
        else {
            problemWrapper.querySelector('p.error').classList.add('show') ;
        }
        
    }
    else if(this == nameNextBtn){
        let nameInput = this.parentElement.parentElement.querySelector('input#name') ;
        if(nameInput.value.length>0){
            nameInput.classList.remove('error') ;
            let currPos = parseInt(form.style.right) ;
            let offset = currPos-100 ;
            form.style.right = `${offset}%`;
            lineAnimation('forward') ;
            currStep++ ;
            tickHandler()
        }
        else{
            nameInput.classList.add('error') ;
        }
    }
    else {
        let currPos = parseInt(form.style.right) ;
        let offset = currPos-100 ;
        form.style.right = `${offset}%`;
        //if(this!=)
        let fillLine = true ;
        modelRadios.forEach(radio => {
            if(this == radio) fillLine = false ;
        })
        if(fillLine) {
            lineAnimation('forward') ;
            currStep++ ;
            tickHandler() ;
            // if(this == analyseNextBtn){
            //     currStep++ ;
            //     tickHandler() ;
            // }
        }
    }
    
}
let prevSlideTriggers = form.querySelectorAll('.prevSlide') ;
prevSlideTriggers.forEach(trigger => {
    trigger.addEventListener('click',prevSlideHandler) ;
})
function prevSlideHandler(e){
    let currPos = parseInt(form.style.right) ;
    let offset = currPos+100 ;
    form.style.right = `${offset}%`;
    let fillLine = true ;
    if(colorPrevBtn == this) fillLine = false ;
    if(fillLine) {
        lineAnimation('backward') ;
        currStep-- ;
        tickHandler()
    }
}
//problems checkboxes
//-----------------------------------------------------
//-----------------------------------------------------
let problemCheckboxes = form.querySelectorAll('.slide#problem input[type="checkbox"]') ;
problemCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('input',checkboxHandler) ;
})
function checkboxHandler(e){
    this.parentElement.querySelector('i').classList.toggle('show') ;
}
//next/prev tabs(for #infos section)
//-----------------------------------------------------
//-----------------------------------------------------
function showTab(elm){
    infos.forEach(info => {
        if(info!=elm) info.classList.remove('show') ;
        else info.classList.add('show') ;
    })
}
let prevTabTriggers = infosWrapper.querySelectorAll('.prevTab') ;
prevTabTriggers.forEach(trigger => {
    trigger.addEventListener('click',prevTabHandler) ;
})
function prevTabHandler(e){
    let targetClass = this.getAttribute('data-target') ;
    let target = infosWrapper.querySelector(`.info.${targetClass}`) ;
    showTab(target) ;
}
//.info.mobile validation 
let mobileNextBtn = infosWrapper.querySelector('.info.mobile .nextTab') ;
let mobileNum = infosWrapper.querySelector('.info.mobile input[type="number"]');
mobileNextBtn.addEventListener('click',function(e){
    if(mobileNum.value.length>6){
        mobileNum.classList.remove('error') ;
        let targetClass = `${this.getAttribute('data-target')}` ;
        let target = infosWrapper.querySelector(`.info.${targetClass}`) ;
        showTab(target) ;
        initTimer();
    }
    else{mobileNum.classList.add('error') ;}
})
//.info.code validation 
let codeNextBtn = infosWrapper.querySelector('.info.code .nextTab') ;
let codeInput = infosWrapper.querySelector('.info.code input[type="number"]') ;
let errorText = infosWrapper.querySelector('.info.code > p.error') ;
let code = 123 ;
codeNextBtn.addEventListener('click',function(e){
    if(codeInput.value == code && (minute.textContent!=0 || second.textContent!=0)){
        codeInput.classList.remove('error') ;
        errorText.classList.remove('show') ;
        let targetClass = `${this.getAttribute('data-target')}` ;
        let target = infosWrapper.querySelector(`.info.${targetClass}`) ;
        showTab(target) ;
    }
    else{
        codeInput.classList.add('error') ;
        errorText.classList.add('show') ;
    }
});
//.info.city validation 
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
let cityNextBtn = infosWrapper.querySelector('.info.city .nextTab') ;
cityNextBtn.addEventListener('click',cityHandler) ;
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
        showTab(target) ;
    }
    else{
        cityError.classList.add('show') ;
    }
}
//.info.name validation 
let nameInput = infosWrapper.querySelector('.info.name input[type="text"]#name') ;
let discountCheckbox = infosWrapper.querySelector('.info.name input[type="checkbox"]#discount') ;
let discountInput = infosWrapper.querySelector('.info.name input[type="text"]#discount_code') ;
discountCheckbox.addEventListener('click',discountHandler) ;
function discountHandler(e){
    discountInput.classList.toggle('show') ;
}
//timer 
let minute = infosWrapper.querySelector('.info.code .minute');
let second =infosWrapper.querySelector('.info.code .second') ;
function initTimer(){
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
}
//Timeline
//----------------------------------------------------------
//----------------------------------------------------------
let timeline = wrapper.querySelector('#timeline') ;
let circles = timeline.querySelectorAll('.circle') ;
let line = timeline.querySelector('.line') ;
let currStep = 0 ;
function lineAnimation(dir){
    let currWidth = parseFloat(line.style.width) ;
    let offset = null ;
    if(dir == 'forward') offset = currWidth + 16.66 ;
    else if(dir == 'backward') offset = currWidth - 16.66 ;
    line.style.width = `${offset}%` ;
}
function tickHandler(){
    circles.forEach((circle,i) => {
        //if(i<currStep) circle.classList.add('active') ;
        //else circle.classList.remove('active') ;
        if(i<=currStep) circle.classList.add('active') ;
        else if(i>currStep) circle.classList.remove('active') ;
        //if(i!=currStep) circle.classList.remove('active') ;
        //else circle.classList.add('active');
    })
}

