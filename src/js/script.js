const modal = document.querySelector('dialog')
const modal_btn = document.querySelector('.search_icon')
const close_btn = document.querySelector('.close_btn')

modal_btn.addEventListener('click', () => {
    modal.showModal()
    document.body.style.overflow = 'hidden';
})
close_btn.addEventListener('click', () => {
    modal.close()
    document.body.style.overflow = 'auto';
})