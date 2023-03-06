const languageSelect = document.querySelector('.header__language-select')
const languageSelectEn = document.querySelector('.header__language-en')
const languageSelectPt = document.querySelector('.header__language-pt')
const languageList = document.querySelector('.header__language-list')
const headerLanguage = document.querySelector('.header__language')

languageSelectEn.addEventListener('click', ()=>{
    languageSelect.classList.remove('_pt')
    languageSelect.classList.add('_en')
    languageSelectPt.classList.remove('_active')
    languageSelectEn.classList.add('_active')
})

languageSelectPt.addEventListener('click', ()=>{
    languageSelect.classList.add('_pt')
    languageSelect.classList.remove('_en')
    languageSelectPt.classList.add('_active')
    languageSelectEn.classList.remove('_active')
})

if(window.innerWidth <= 1024){
    headerLanguage.addEventListener('click', () => {
        languageList.classList.toggle('_open')
        headerLanguage.classList.toggle('_open')
    })
}