import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
    
    const drinkDiv = document.createElement("div")
    drinkDiv.classList.add("drink")
    drinkDiv.innerHTML= `
        <div class="drink__product">
        <div class="drink__cup">
            <img src=https://apps.kodim.cz/daweb/cafelora/assets/cups/${props.id}.png />
        </div>
        <div class="drink__info">
            <h3>${props.name}</h3> 
        </div>
        </div>
            <div class="drink__controls">
            <button class="order-btn">Objednat</button>
        </div>
        `
        
     
    let layerElm = drinkDiv.querySelector(".drink__info")
    props.layers.forEach((item) => layerElm.innerHTML += Layer(item))

    const orderBtn = drinkDiv.querySelector(".order-btn")
    const drinkCup = drinkDiv.querySelector(".drink__cup")
    
    orderBtn.addEventListener("click", () => {
        if (props.ordered === false){
            drinkCup.classList.add("drink__cup--selected")
            props.ordered = true
            orderBtn.textContent = "Zrušit"
        } else {
            drinkCup.classList.remove("drink__cup--selected")
            orderBtn.textContent = "Objednat"
            props.ordered = false
        }
    
    })
    

    return drinkDiv
    
}
