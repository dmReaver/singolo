"use strict"

window.onload = function(){
    // addMenuClickHandler();
    addIphoneScreenSwithHandler();
    addFilterClickHandler();
    addImageBorderHandler();
    addSendBtnHandler();
    addCloseBtnHandler();
    addControlClickHandler();

    window.addEventListener("scroll", () =>{
        if(window.pageYOffset <600){
            removeMenuLinkActive();
            addMenuLinkActive(document.querySelectorAll('.menu>a')[0])
        } else if(window.pageYOffset >= 600 && window.pageYOffset <1100) {
            removeMenuLinkActive();
            addMenuLinkActive(document.querySelectorAll('.menu>a')[1])
        } else if(window.pageYOffset >= 1100 && window.pageYOffset <1970) {
            removeMenuLinkActive();
            addMenuLinkActive(document.querySelectorAll('.menu>a')[2])
        } else if(window.pageYOffset >= 1970 && window.pageYOffset <2581) {
            removeMenuLinkActive();
            addMenuLinkActive(document.querySelectorAll('.menu>a')[3])
        } else if(window.pageYOffset >= 2581) {
            removeMenuLinkActive();
            addMenuLinkActive(document.querySelectorAll('.menu>a')[4])
        }
    })

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

const addSendBtnHandler = () => {
    document.querySelector('.form__send-btn').addEventListener('click', () => {
        console.log('send button click');
        
        const subject = document.querySelector('.text-subject').value
        const description = document.querySelector('.text-description').value
        const required = document.querySelectorAll('.required')
        if(required[0].validity.valid && required[1].validity.valid){
            document.querySelector('.message-block').classList.remove('message_hidden')
            if(subject == ""){
                document.querySelector('.message__subject').innerText = "Without subject"
            } else {
                document.querySelector('.message__subject').innerText = subject
            }

            if(description == ""){
                document.querySelector('.message__description').innerText = "Without description"
            } else {
                document.querySelector('.message__description').innerText = description
            }
        }
    })
}

const addCloseBtnHandler = () => {
    document.querySelector('.message__btn-close').addEventListener('click', () => {
        document.querySelector('.message__subject').value = "";
        document.querySelector('.message__description').value = "";
        document.querySelector('.message-block').classList.add('message_hidden');
        document.querySelectorAll('input').forEach(x => x.value = "");
        document.querySelector('textarea').value = "";
    })
}


const addControlClickHandler = () => {
    let slider = document.querySelector('.slider__wrapper')
    let slider_item = document.querySelectorAll('.slider__wrapper>div')

    let current_wrapper = 0;
    let current_slide_item1 = 0;
    let current_slide_item2 = 0;

    document.querySelectorAll('.slider-control>div').forEach( el => {
        el.addEventListener('click', (event) => {
            let direction;
            if(event.target.classList.contains('slider-control__left')){
                direction = 'left';
                console.log(direction);
                
                if(current_slide_item1 != current_slide_item2){
                    current_slide_item1-= 2;
                    slider_item[0].style.transform = 'translateX(' + current_slide_item1 + '00%)'
                } else {
                    current_slide_item2-= 2;
                    slider_item[1].style.transform = 'translateX(' + current_slide_item2 + '00%)'
                }
                window.setTimeout(100)
                current_wrapper++;
                slider.style.transform = 'translateX(' + current_wrapper + '00%)'
            } else if(event.target.classList.contains('slider-control__right')){
                direction = 'right';
                console.log(direction);
                current_wrapper--;
                slider.style.transform = 'translateX(' + current_wrapper + '00%)'

                if(current_slide_item1 < current_slide_item2){
                    current_slide_item1+= 2;
                    slider_item[0].style.transform = 'translateX(' + current_slide_item2 + '00%)'
                } else {
                    current_slide_item2+= 2;
                    slider_item[1].style.transform = 'translateX(' + current_slide_item1 + '00%)'
                }
            } else {
                throw new Error('wrong direction')
            }
        })
    })
}