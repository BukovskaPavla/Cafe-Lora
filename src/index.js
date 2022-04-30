import './style.css';

console.log('funguju!');

const navBtn = document.querySelector("#nav-btn")
const navNav = document.querySelectorAll("nav a")
const nav = document.querySelector("nav")

navBtn.addEventListener("click", () => {
    nav.classList.toggle("nav-closed")
})


/* navNav.addEventListener("click", () => {
    console.log("jsem v menu")
    nav.classList.add("nav-closed")
}) */

navNav.forEach((elm) => {
    elm.addEventListener('click', () => {
        nav.classList.add("nav-closed")
    });
  });