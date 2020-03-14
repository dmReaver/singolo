window.onload = function(){
    addMenuClickHandler();
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