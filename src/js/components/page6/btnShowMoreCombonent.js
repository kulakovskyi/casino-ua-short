const bestItem = document.querySelectorAll('.best__item');

bestItem.forEach(item => {
    const btnShowItem = item.querySelector('.best__item-btn-show')
    const btnHiddenItem = item.querySelector('.best__item-btn-hide')
    const textItem = item.querySelector('.best__item-text')
    const infoItem = item.querySelector('.best__item-info')

    btnShowItem.addEventListener('click', () => {
        textItem.classList.add('_showText');
        btnShowItem.classList.add('_hidden');
        btnHiddenItem.classList.remove('_hidden');
        infoItem.classList.add('_open');
    })

    btnHiddenItem.addEventListener('click', () => {
        textItem.classList.remove('_showText');
        btnHiddenItem.classList.add('_hidden');
        btnShowItem.classList.remove('_hidden');
        infoItem.classList.remove('_open');
    })
})