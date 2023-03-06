const bestItemWrapper = document.querySelectorAll('.best__item-wrapper');
bestItemWrapper.forEach(item => {
    let btnShow = item.querySelector('.best__item-reviews-btn');
    let listReviews = item.querySelector('.best__item-reviews');

    btnShow.addEventListener('click', () => {
        listReviews.classList.toggle('_show')
    })
})