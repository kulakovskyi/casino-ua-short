const btnTabsOne = document.querySelector('.casino-online__tabs-btn-one')
const btnTabsTwo = document.querySelector('.casino-online__tabs-btn-two')
const newsItemListOne = document.querySelector('.casino-online__list-one')
const newsItemListTwo = document.querySelector('.casino-online__list-two')

btnTabsOne.addEventListener('click', ()=>{
    btnTabsOne.classList.add('_active')
    newsItemListOne.classList.remove('_hidden')
    btnTabsTwo.classList.remove('_active')
    newsItemListTwo.classList.add('_hidden')
})

btnTabsTwo.addEventListener('click', ()=>{
    btnTabsTwo.classList.add('_active')
    newsItemListTwo.classList.remove('_hidden')
    btnTabsOne.classList.remove('_active')
    newsItemListOne.classList.add('_hidden')
})
