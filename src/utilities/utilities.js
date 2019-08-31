let getStyle = (el,prop) => window.getComputedStyle(el,null).getPropertyValue(prop) ;
function checkEllipse(elms){
    elms.forEach(elm => {
        let parent = elm.parentElement;
        let threshold = parseFloat(window.getComputedStyle(parent,null).getPropertyValue('max-height')) ;
        if(parent.scrollHeight > threshold) elm.style.display = "block" ;
    })
}
export default {
    getStyle,
    checkEllipse
}