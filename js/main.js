const menu = document.querySelector("#menu")
const button = document.querySelector(".button")
var state = true

const toggleMenu = () => {
  if (state) {
    button.style.transform = "rotate(45deg)"
    menu.style.visibility = "visible"
    state = false
  } else {
    button.style.transform = "rotate(90deg)"
    menu.style.visibility = "hidden"
    state = true
  }
}
