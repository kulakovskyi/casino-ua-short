const btnTabsBlogOne = document.querySelector('.blog__tabs-btn-one')
const btnTabsBlogTwo = document.querySelector('.blog__tabs-btn-two')
const blogItemListOne = document.querySelector('.blog__list-one')
const blogItemListTwo = document.querySelector('.blog__list-two')

btnTabsBlogOne.addEventListener('click', ()=>{
    btnTabsBlogOne.classList.add('_active')
    blogItemListOne.classList.remove('_hidden')
    btnTabsBlogTwo.classList.remove('_active')
    blogItemListTwo.classList.add('_hidden')
})

btnTabsBlogTwo.addEventListener('click', ()=>{
    btnTabsBlogTwo.classList.add('_active')
    blogItemListTwo.classList.remove('_hidden')
    btnTabsBlogOne.classList.remove('_active')
    blogItemListOne.classList.add('_hidden')
})
