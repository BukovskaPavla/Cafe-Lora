import './style.css';

console.log('funguju!');

const navBtn = document.querySelector("#nav-btn")
const navNav = document.querySelectorAll("nav a")
const nav = document.querySelector("nav")

navBtn.addEventListener("click", () => {
    nav.classList.toggle("nav-closed")
})

navNav.forEach((elm) => {
    elm.addEventListener('click', () => {
        nav.classList.add("nav-closed")
    });
  });





//KOMPONENTA Layer
import {Layer} from "./Layer/index.js"
//data pro komponentu Layer
const layer = [{
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  }
 ]

/* const drinkInfo = document.querySelector(".drink__info")
for (let i = 0; i <= layer.length; i++){
    drinkInfo.innerHTML += Layer(layer[i])
    } */

import {Drink} from "./Drink/index.js"
const drink = {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
    image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
  };

  const drinkList = document.querySelector(".drinks-list")
  drinkList.appendChild(Drink(drink))

  
