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
/* const layer = [{
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
 ] */

/* const drinkInfo = document.querySelector(".drink__info")
for (let i = 0; i <= layer.length; i++){
    drinkInfo.innerHTML += Layer(layer[i])
    } */


import {Drink} from "./Drink/index.js"

fetch(`https://apps.kodim.cz/daweb/cafelora/api/drinks`)
    .then((response) => {
        return response.json()
    })
    .then((drinks) => {
        console.log(drinks.results)
        
        const drinkList = document.querySelector(".drinks-list")
        for (let i = 0; i <= drinks.results.length; i++){
            drinkList.appendChild(Drink(drinks.results[i]))
            }
        return drinks
    })


const drinks = [
    {
      id: 'cappuccino',
      name: 'Cappuccino',
      ordered: false,
      layers: [
        {
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
        },
      ],
      image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/cappuccino.png',
    },
    {
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
    },
  ];

  

  
