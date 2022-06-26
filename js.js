let links = document.querySelector('.links')

let burger = document.querySelector('.burger')

let arrows = document.querySelectorAll('.arrow')

let editor = document.querySelector('.editor')

let laptop = document.querySelector('.laptop')

function changeIcon(){
    if(burger.innerHTML == 'menu'){
        burger.innerHTML = 'close'
        links.style.display = 'flex'
    }
    else{
        burger.innerHTML = 'menu'
        links.style.display = 'none'
    }
}

arrows.forEach(arrow => {   
    if(window.innerWidth >= 700){
        arrow.src = './images/icon-arrow-light.svg'
    }else{
        arrow.src = './images/icon-arrow-dark.svg'
    }
});

if(window.innerWidth < 700){
    editor.src = './images/illustration-editor-mobile.svg'
    laptop.src = './images/illustration-laptop-mobile.svg'
}
else{
    editor.src = './images/illustration-editor-desktop.svg'
    laptop.src = './images/illustration-laptop-desktop.svg'
}