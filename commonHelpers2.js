import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as s}from"./assets/vendor-77e16229.js";const m=document.querySelector(".form"),c=document.querySelector('input[name="delay"]'),a=document.querySelectorAll('input[name="state"]');m.addEventListener("submit",u);function u(i){i.preventDefault();const o=c.value;let t;a.forEach(e=>{e.checked&&(t=e.value)}),new Promise((e,r)=>{setTimeout(()=>{t==="fulfilled"?e(`✅ Fulfilled promise in ${o}ms`):r(`❌ Rejected promise in ${o}ms`)},o)}).then(n,l);function n(e){console.log(e),s.success({title:"✅",message:`Fulfilled promise in ${o}ms`,position:"topRight",messageColor:"#fff",backgroundColor:"#59A10D",messageSize:"16px",messageLineHeight:"1.5",close:!0})}function l(e){console.log(e),s.error({title:"❌",message:`Rejected promise in ${o}ms`,position:"topRight",messageColor:"#fff",backgroundColor:"#EF4040",messageSize:"16px",messageLineHeight:"1.5",close:!0})}}
//# sourceMappingURL=commonHelpers2.js.map