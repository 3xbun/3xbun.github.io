const menu = document.querySelector("#menu");
const button = document.querySelector(".button");
var state = true;

const toggleMenu = () => {
  if (state) {
    button.style.transform = "rotate(45deg)";
    menu.style.transform = "translateX(0%)";
    state = false;
  } else {
    button.style.transform = "rotate(90deg)";
    menu.style.transform = "translateX(100%)";
    state = true;
  }
};

const changeHighlight = href => {
  let link = href.replace("#", "");

  let newCurrent = document.querySelectorAll(`${href}-link`);
  let oldCurrent = document.querySelectorAll(".current");
  oldCurrent.forEach(link => link.classList.remove("current"));
  newCurrent.forEach(link => link.classList.add("current"));

  // console.log(newCurrent);
};
