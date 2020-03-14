window.onload = function(){
    addMenuClickHandler();
    addIphoneScreenSwithHandler();
}

const addMenuClickHandler = () => {
    document.querySelector('.menu').addEventListener('click', (event) => {
        if(event.target.classList.contains('menu__link')){
            removeMenuLinkActive();
            addMenuLinkActive(event.target);
        }
    })
}

const removeMenuLinkActive = () => {
    document.querySelectorAll('.menu__link').forEach( el => {
        el.classList.remove('menu__link_active');
    })
}

const addMenuLinkActive = (target) => {
    target.classList.add('menu__link_active')
}

const addIphoneScreenSwithHandler = () => {
    document.querySelector('.slider__content').addEventListener('click', (event) => {
        if(event.target.classList.contains('iphone__screen')){
            switchScreen(event.target);
        }
    })
}
const switchScreen = (target) => {
    if(target.classList.contains('iphone__screen_switched-off')){
        target.classList.remove('iphone__screen_switched-off')
    } else {
        target.classList.add('iphone__screen_switched-off')
    }
}