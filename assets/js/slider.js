let slidersBg = document.querySelector(".slider");
let leftClick = document.querySelector("#left");
let rightClick = document.querySelector("#right");
let sliderTitle = document.querySelector(".sliderTitle");

let sliders = ["hero_bg_2_1", "hero_bg_2_2", "hero_bg_2_3"];
let h2Content = [
  "Welcome to our ",
  "Lorem ipsum dolor ",
  "Maiores necessitatibus ",
];

let orangeText = ["website!!!", "sit amet", "facilis "];

let index = 0;
leftClick.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = sliders.length - 1;
  }
  slidersBg.style.background = `linear-gradient(rgb(0 0 0 / 62%), rgb(93 93 93 / 98%)), url(./assets/img/${sliders[index]}.png)`;
  sliderTitle.innerHTML = `${h2Content[index]}<span>${orangeText[index]}</span>`;
});
rightClick.addEventListener("click", () => {
  index++;
  if (index == sliders.length) {
    index = 0;
  }
  slidersBg.style.background = `linear-gradient(rgb(0 0 0 / 62%), rgb(93 93 93 / 98%)), url(./assets/img/${sliders[index]}.png)`;
  sliderTitle.innerHTML = `${h2Content[index]}<span>${orangeText[index]}</span>`;
});
