!function(){const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");e.setAttribute("disabled","");let d=null;function r(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(()=>{d=setInterval(r,1e3),t.setAttribute("disabled",""),e.removeAttribute("disabled","")})),e.addEventListener("click",(()=>{clearInterval(d),t.removeAttribute("disabled",""),e.setAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.87a5876e.js.map
