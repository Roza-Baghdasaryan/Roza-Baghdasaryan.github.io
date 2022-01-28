"use strict";

const langel = document.querySelector('.lang');
const link = document.querySelectorAll('a');

const homeV = document.querySelector('.home');
const aboutV = document.querySelector('.about');
const contactV = document.querySelector('.contact');

link.forEach(el => {
  el.addEventListener("click", () => {
    const attr = el.getAttribute('language');
    homeV.textContent = data[attr].home;
    aboutV.textContent = data[attr].about;
    contactV.textContent = data[attr].contact;

  })
});

var data = {
  "armenian": {
    "home": "Գլխավոր",
    "about": "Իմ մասին",
    "contact": "Կապ",
  },
  "russian": {
    "home": "Главная",
    "about": "Обо мне",
    "contact": "Контакт",
  },
  "english": {
    "home": "Home",
    "about": "About",
    "contact": "Contact",
  }
}