const bonusItem = document.querySelectorAll('.bonus__item');
bonusItem.forEach(item => {
    let btnItemShow = item.querySelector('.bonus__item-info');
    let textItemInfo = item.querySelector('.bonus__item-info-text');
    btnItemShow.addEventListener('click', ()=> {
        textItemInfo.classList.toggle('_show');
        btnItemShow.classList.toggle('_active')
    })
})