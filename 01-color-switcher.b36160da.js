!function(){var t,n=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");function o(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}n.addEventListener("click",(function(){t=setInterval(o,1e3)})),e.addEventListener("click",(function(){clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.b36160da.js.map
