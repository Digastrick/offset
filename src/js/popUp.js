let buttonPopUp = document.querySelector('.button-start')
let popUp = document.querySelector('.pop-up')
let backgroundBlur = document.querySelector('.section__start');
let cross = document.querySelector('.cross');
console.log(popUp)

buttonPopUp.addEventListener('click',function(){
    popUp.classList.toggle('vision');
    backgroundBlur.classList.toggle('fullBlur');
    document.addEventListener('click', clickOutsideHandler);
})
cross.addEventListener('click', function(){
    popUp.classList.remove('vision')
    backgroundBlur.classList.remove('fullBlur');
})

function clickOutsideHandler(event) {
    if (!popUp.contains(event.target) && event.target !== buttonPopUp) {
        popUp.classList.remove('vision')
        backgroundBlur.classList.remove('fullBlur');
        document.removeEventListener('click', clickOutsideHandler);
    }
}