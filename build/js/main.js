/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/animate.js":
/*!**************************************!*\
  !*** ./src/js/components/animate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animate": () => (/* binding */ animate)
/* harmony export */ });
const animate = () => {
  const animationList = document.querySelector('.animation__list');
  const data = [{
    imgUrl: 'img/flag1.svg',
    name: 'flag'
  }, {
    imgUrl: 'img/flag3.svg',
    name: 'flag'
  }, {
    imgUrl: 'img/flag2.svg',
    name: 'flag'
  }, {
    imgUrl: 'img/flag1.svg',
    name: 'flag'
  }, {
    imgUrl: 'img/flag1.svg',
    name: 'flag'
  }];
  data.forEach(item => {
    const url = "\n      <li class=\"animation__item animation__item-hidden\">\n        <img src=\"".concat(item.imgUrl, "\" alt=\"").concat(item.name, "\" />\n      </li>\n    ");
    animationList.insertAdjacentHTML('beforeend', url);
  });
  let ms = 3000;
  Array.from(animationList.children).forEach(item => {
    ms += 400;
    setTimeout(() => {
      item.classList.remove('animation__item-hidden');
      setTimeout(() => {
        animateBy();
      }, ms - 3000);
    }, ms);
  });
};

function animateBy() {
  const animationlist = document.querySelector('.animation__list');
  animationlist.style.animation = '2s ease-in-out infinite rot';
}

/***/ }),

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openMenu": () => (/* binding */ openMenu)
/* harmony export */ });
function openMenu() {
  const burger = document.querySelector('.burger');
  const headerContainer = document.querySelector('.header__container');

  function showMenu() {
    burger.classList.add('burger--active');
    headerContainer.classList.add('header-mobile');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    burger.classList.remove('burger--active');
    headerContainer.classList.remove('header-mobile');
    document.body.style.overflow = '';
  }

  if (burger) {
    burger.addEventListener('click', () => {
      if (burger.classList.contains('burger--active')) {
        closeMenu();
        return;
      }

      showMenu();
    });
  }
}

/***/ }),

/***/ "./src/js/components/fetchData.js":
/*!****************************************!*\
  !*** ./src/js/components/fetchData.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchData": () => (/* binding */ fetchData)
/* harmony export */ });
async function fetchData() {
  const url = 'https://baconipsum.com/api/?type=lucky';

  try {
    const response = await fetch(url);
    const data = await response.json();
    showData(data);
  } catch (error) {
    console.log(error);
    showData();
  }
}

const showData = data => {
  const descr = document.querySelector('.hero__descr');

  if (!data) {
    descr.innerHTML = 'Ошибка загрузки, попробуйте еще раз';
  }

  descr.innerHTML = data[0];
};

/***/ }),

/***/ "./src/js/components/formSubmit.js":
/*!*****************************************!*\
  !*** ./src/js/components/formSubmit.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formSubmit": () => (/* binding */ formSubmit)
/* harmony export */ });
const formSubmit = () => {
  const form = document.forms.search;
  const error = document.querySelector('.error');
  if (!form) return;
  validateInput(form.elements.searchInput, error);
  form.addEventListener('submit', e => {
    e.preventDefault();
    const {
      searchInput
    } = Object.fromEntries(new FormData(e.target).entries());

    if (searchInput.length < 4 || searchInput.length > 12) {
      error.innerHTML = 'Минимальная длина: 4, максимальная: 12';
      return;
    }

    form.reset();
  });
};

function validateInput(input, error) {
  const regex = /[!@#$%^&*()]/g;
  input.addEventListener('input', e => {
    e.target.value = e.target.value.replace(regex, '');

    if (e.target.value.length >= 4) {
      error.innerHTML = '';
    }
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/animate */ "./src/js/components/animate.js");
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/burger */ "./src/js/components/burger.js");
/* harmony import */ var _components_fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/fetchData */ "./src/js/components/fetchData.js");
/* harmony import */ var _components_formSubmit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/formSubmit */ "./src/js/components/formSubmit.js");




(0,_components_fetchData__WEBPACK_IMPORTED_MODULE_2__.fetchData)();
document.addEventListener('DOMContentLoaded', () => {
  (0,_components_animate__WEBPACK_IMPORTED_MODULE_0__.animate)();
  (0,_components_formSubmit__WEBPACK_IMPORTED_MODULE_3__.formSubmit)();
  (0,_components_burger__WEBPACK_IMPORTED_MODULE_1__.openMenu)();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map