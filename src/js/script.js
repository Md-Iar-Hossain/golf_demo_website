const nav = document.querySelector('nav')
const modal = document.querySelector('dialog')
const modal_btn = document.querySelector('.search_icon')
const close_btn = document.querySelector('.close_btn')
const menu_bar = document.querySelector('.menu_bar')

modal_btn.addEventListener('click', () => {
    modal.showModal()
    removeOverFlow(true)
})
close_btn.addEventListener('click', () => {
    modal.close()
    removeOverFlow(false)
})
menu_bar.addEventListener('click', function() {
    if(!nav.classList.contains('active')) {
        nav.classList.add('active');
        this.querySelector('img').src = 'img/close.svg';
        this.style.animation = 'rotateIn 0.5s ease-in-out'
        removeOverFlow(true)
    } else {
        nav.classList.remove('active');
        this.querySelector('img').src = 'img/menu.svg'
        this.style.animation = 'rotateOut 0.5s ease-in-out'
        removeOverFlow(false)
    }   
})
function removeOverFlow(boolean) {
    if (boolean) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = 'auto';
    }
}