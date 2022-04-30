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


const orderBtn = document.querySelector(".order-btn")
let ordered = false
const drinkCup = document.querySelector(".drink__cup")

orderBtn.addEventListener("click", () => {
    if (ordered === false){
        drinkCup.classList.add("drink__cup--selected")
        ordered = true
        orderBtn.textContent = "Zrušit"
    } else {
        drinkCup.classList.remove("drink__cup--selected")
        orderBtn.textContent = "Objednat"
        ordered = false
    }

})


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

const drinkInfo = document.querySelector(".drink__info")
for (let i = 0; i <= layer.length; i++){
    drinkInfo.innerHTML += Layer(layer[i])
    }

