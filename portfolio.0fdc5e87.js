!function(){if("undefined"!=typeof window){var e={get passive(){!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}var t,n,i,a;"undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints);t=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),a=function(){var e="true"===n.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!e),t.classList.toggle("is-open")},n.addEventListener("click",a),i.addEventListener("click",a),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(t.classList.remove("is-open"),n.setAttribute("aria-expanded",!1))}))}();
//# sourceMappingURL=portfolio.0fdc5e87.js.map