import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as t}from"./assets/vendor-77e16229.js";const m=document.querySelector(".form");m.addEventListener("submit",a);function a(o){o.preventDefault();const e=o.target.elements.delay.value*1e3,i=o.target.elements.state.value;new Promise((s,r)=>{setTimeout(()=>{i==="fulfilled"?s(`✅ Fulfilled promise in ${e}ms`):r(`❌ Rejected promise in ${e}ms`)},e)}).then(n,l);function n(s){console.log(s),t.success({title:"✅",message:`Fulfilled promise in ${e}ms`,position:"topRight",messageColor:"#fff",backgroundColor:"#59A10D",messageSize:"16px",messageLineHeight:"1.5",close:!0})}function l(s){console.log(s),t.error({title:"❌",message:`Rejected promise in ${e}ms`,position:"topRight",messageColor:"#fff",backgroundColor:"#EF4040",messageSize:"16px",messageLineHeight:"1.5",close:!0})}}
//# sourceMappingURL=commonHelpers2.js.map