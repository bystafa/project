import 'bootstrap'
import './styles/styles.scss'
import json from './1.json'
import { data } from 'jquery'

let menu = document.querySelector("ul.menu__list")
let menuSecond = document.querySelector("ul.menu__list__second")
let list = document.querySelector("div.home")
let listSecond = document.querySelector("div.educ")
let arrow = document.querySelector("div.arrow-first")
let arrowSecond = document.querySelector("div.arrow-second")
const district = []
let flag = false

list.addEventListener("click", () => {
    arrow.classList.toggle("arrow-top")
    menu.classList.toggle("active")
})

listSecond.addEventListener("click", () => {
    if (arrowSecond.classList.contains("arrow-top")) {
        arrowSecond.classList.remove("arrow-top")
        arrowSecond.classList.add("arrow-bottom")
    } else {
        arrowSecond.classList.remove("arrow-bottom")
        arrowSecond.classList.add("arrow-top")
    }
    menuSecond.classList.toggle("active")
})

window.onload = function() {
    const svgMap = document.querySelector("div.map")
    const divDistr = document.querySelector("h4.distr")
    svgMap.onmouseover = function(e) {
        if (district.indexOf(e.target.classList[0]) !== -1) {
            divDistr.innerHTML = document.querySelector("." + e.target.classList[0]).textContent
            divDistr.style.left = e.pageX + "px";
            divDistr.style.top = e.pageY - 30 + "px";
            divDistr.style.display = "block";
        }
    }
}

const goto = document.querySelector("div.dropdown-menu")
json.data.forEach(subject => {
    const span = document.createElement("span")
    span.className = "dropdown-item" + " " + subject[0]
    span.innerHTML = subject[1].toString()
    goto.append(span)
    district.push(subject[0])
})

$(document).on("click",function(e) {
    let id_click = $(e.target).attr("class");
    if (flag) {
        const dist = document.querySelector("path.activeMap")
        dist.classList.remove("activeMap")
        flag = false
    }
    if (id_click) {
        id_click = id_click.split(" ")
        if (district.indexOf(id_click[1]) !== -1) {
            const path = "path." + id_click[1]
            const dist = document.querySelector(path)
            dist.classList.add("activeMap")
            flag = true
        }
        if (id_click[0] === "header__burger") {
            $(".header__burger,.menu__burger, .container").toggleClass("active")
        }
    }
})

