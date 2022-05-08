const toggleSwitch = document.querySelector("input[type=checkbox]");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const img1 = document.getElementById("image1");
const img2 = document.getElementById("image2");
const img3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

function imageSwitch(color) {
  img1.src = `img/proud_coder_${color}.svg`;
  img2.src = `img/undraw_feeling_proud_${color}.svg`;
  img3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

//dark mode styles
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50% )";
  textBox.style.backgroundColor = "rgb(255 255 255/ 50% )";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageSwitch("dark");
}

//light mode styles
function lightmode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50% )";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50% )";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageSwitch("light");
}

//swtich theme function
function swtichTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    window.localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    window.localStorage.setItem("theme", "light");

    lightmode();
  }
}

//onchecked event
toggleSwitch.addEventListener("change", swtichTheme);

//check default in localstorage

const currentTheme = window.localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}
