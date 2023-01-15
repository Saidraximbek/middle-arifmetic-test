// 'use strict';
// const sonBir = document.querySelector("#number--one--one");
// const sonIkki = document.querySelector("#number--one--two");
// const javob = document.querySelector("#number--two--number");
// const natija = document.querySelector("#natija");
// const togri = `Javobingiz to'g'ri`;
// const notogri = `Javobingiz noto'g'ri`;
// const aniqJavob = (sonBir.va + sonIkki.ariaValueText)/2;


// tekshirish.addEventListener("click", () => {
//   if(aniqJavob == javob.ariaValueText) {
//   natija.innerHTML=togri;
//   }
//   else {
//     natija.innerHTML=notogri;
//   };
//   });

'use strict'; 
const sonBir = document.querySelector('#number--one--one'); 
const sonIkki = document.querySelector('#number--one--two'); 
const javob = document.querySelector('#number--two--number'); 
const natija = document.querySelector('#natija'); 
const togri = `Javobingiz to'g'ri`; 
const notogri = `Javobingiz noto'g'ri`; 
 
tekshirish.addEventListener('click', (e) => { 
  e.preventDefault(); 
  const aniqJavob = (Number(sonBir.value) + Number(sonIkki.value)) / 2; 
  if (aniqJavob === Number(javob.value)) { 
    natija.innerHTML = togri; 
    console.log(javob.value, aniqJavob); 
  } else { 
    natija.innerHTML = notogri; 
  } 
});