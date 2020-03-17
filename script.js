"use strict"

window.onload = function(){
    addMenuClickHandler();
    addIphoneScreenSwithHandler();
    addSlideLeftHandler();
    addFilterClickHandler();

    addImageBorderHandler();
}

const addFilterClickHandler = () => {
    document.querySelector('.filter-list').addEventListener('click', (event) => {
        if(event.target.classList.contains('filter-list__text')){
            // console.log(event.target)
            mixPictures(event.target);
            removeFilterLinkActive();
            addFilterLinkActive(event.target);
        }
    })
}

const removeFilterLinkActive = () => {
    document.querySelectorAll('.filter-list__text').forEach( el => {
        el.classList.remove('filter-list__item_active');
    })
}

const mixPictures = (target) => {
    if(!target.classList.contains('filter-list__item_active')){
        let fig = document.querySelectorAll('.pictures')[0].children
        let arr = Array();
        for(let i = 0; i< fig.length; i++) { arr.push(fig[i]) }
        arr.reverse()
        arr.forEach(x => {
            document.querySelectorAll('.pictures')[0].removeChild(x)
        });
        arr.forEach(x => {
            document.querySelectorAll('.pictures')[0].appendChild(x)
        });
    }
    
}

const addFilterLinkActive = (target) => {
    target.classList.add('filter-list__item_active')
}


// menu click handler
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

// screen switch
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


// slider
const addSlideLeftHandler = () => {
    document.querySelector('.slider-control__left').addEventListener('click', (event) => {
        console.log('left');
        // console.log(event.target);
        
        let items = document.querySelectorAll('.slider__item')
        // items.forEach(element => {
            
        // });
    })
}


// Image Border
const addImageBorderHandler = () => {
    document.querySelector('.pictures').addEventListener('click', (event) => {
        let border = document.createElement('div');
        border.classList.add('img_border')
        border.style.border = "solid 5px #F06C64";
        border.style.width = "220px";
        border.style.height = "187px";
        border.style.position = "relative";
        border.style.top = "-5px";
        border.style.left = "-5px";
        
        if(event.target.tagName == "IMG"){

            if(document.querySelectorAll('.img_border').length == 0){
                console.log('add border:')
            }else{
                console.log('remove border')
            }

            let con = document.querySelectorAll('.pictures')[0]
            let arr = Array();
            
            for(let i = 0; i< con.length; i++){
                arr.push(con[i]);
            }

            for(let i =0; i< con.children.length; i++){
                
                if(con.children[i] == event.target){
                    if(con.children[i].classList.contains('active')){
                        con.children[i].removeAttribute('style')
                        con.children[i].classList.remove('active');
                    } else {
                        con.children[i].classList.add('active')
                        con.children[i].style.border = "solid 5px #F06C64";
                        con.children[i].style.position = "relative";
                        con.children[i].style.top = "-5px";
                        con.children[i].style.left = "-5px";
                    }
                } else {
                    con.children[i].classList.remove('active');
                    con.children[i].removeAttribute('style')
                }
            }
        }

    })
}