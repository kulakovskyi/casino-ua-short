/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/footerCookieComponent.js":
/*!****************************************************!*\
  !*** ./src/js/components/footerCookieComponent.js ***!
  \****************************************************/
/***/ (() => {

const cookieBtn = document.querySelector('.footer__cookie-btn');
const cookieBlock = document.querySelector('.footer__cookie');
cookieBtn.addEventListener('click', () => {
  cookieBlock.classList.add('_hidden');
});

/***/ }),

/***/ "./src/js/components/languageComponent.js":
/*!************************************************!*\
  !*** ./src/js/components/languageComponent.js ***!
  \************************************************/
/***/ (() => {

const languageSelect = document.querySelector('.header__language-select');
const languageSelectEn = document.querySelector('.header__language-en');
const languageSelectPt = document.querySelector('.header__language-pt');
const languageList = document.querySelector('.header__language-list');
const headerLanguage = document.querySelector('.header__language');
languageSelectEn.addEventListener('click', () => {
  languageSelect.classList.remove('_pt');
  languageSelect.classList.add('_en');
  languageSelectPt.classList.remove('_active');
  languageSelectEn.classList.add('_active');
});
languageSelectPt.addEventListener('click', () => {
  languageSelect.classList.add('_pt');
  languageSelect.classList.remove('_en');
  languageSelectPt.classList.add('_active');
  languageSelectEn.classList.remove('_active');
});
if (window.innerWidth <= 1024) {
  headerLanguage.addEventListener('click', () => {
    languageList.classList.toggle('_open');
    headerLanguage.classList.toggle('_open');
  });
}

/***/ }),

/***/ "./src/js/components/scrollTopComponent.js":
/*!*************************************************!*\
  !*** ./src/js/components/scrollTopComponent.js ***!
  \*************************************************/
/***/ (() => {

const btnUp = {
  el: document.querySelector('.footer__btn-top'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('_hidden');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('_hidden');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.footer__btn-top').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };
  }
};
btnUp.addEventListener();

/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ (() => {

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".header__menu");
const body = document.querySelector("body");
iconMenu.addEventListener("click", function (e) {
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
  body.classList.toggle("_lock");
});

//openMenu on mob
const itemMenuSub = document.querySelectorAll('.menu__item-sub_list');
const itemHoverDesc = document.querySelectorAll('.menu__item-hover-desc');
if (window.innerWidth <= 1024) {
  itemHoverDesc.forEach(item => {
    item.classList.remove('menu__item-hover-desc');
  });
  itemMenuSub.forEach(item => {
    let menuSub = item.querySelector('.menu__item-list');
    item.addEventListener('click', () => {
      menuSub.classList.toggle('_open');
      item.classList.toggle('_open');
    });
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./src/js/script-page17.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/burger */ "./src/js/functions/burger.js");
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions_burger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_languageComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/languageComponent.js */ "./src/js/components/languageComponent.js");
/* harmony import */ var _components_languageComponent_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_languageComponent_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_footerCookieComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footerCookieComponent */ "./src/js/components/footerCookieComponent.js");
/* harmony import */ var _components_footerCookieComponent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_footerCookieComponent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_scrollTopComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/scrollTopComponent */ "./src/js/components/scrollTopComponent.js");
/* harmony import */ var _components_scrollTopComponent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_scrollTopComponent__WEBPACK_IMPORTED_MODULE_3__);
//Реализация бургер-меню


//Language


//Footer cookie


//btn scrollTop

})();

/******/ })()
;
//# sourceMappingURL=script-page17.map