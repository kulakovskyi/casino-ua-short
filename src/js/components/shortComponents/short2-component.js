const slotItem = document.querySelectorAll('.casino-slot__item');
slotItem.forEach(item => {
    let btnItemShow = item.querySelector('.casino-slot__item-info');
    let textItemInfo = item.querySelector('.casino-slot__item-info-text');
    btnItemShow.addEventListener('click', ()=> {
        textItemInfo.classList.toggle('_show');
    })
})