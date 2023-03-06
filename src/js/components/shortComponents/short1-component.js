const copiedBlocks = document.querySelectorAll('.casinos-overview__item-copy');

copiedBlocks.forEach(item => {
    let plush = item.querySelector('span')
    item.addEventListener('click', ()=>{
        plush.classList.add('_visible')
        function remove(){
            plush.classList.remove('_visible')
        }
        setTimeout (remove, 2000)
    })
})