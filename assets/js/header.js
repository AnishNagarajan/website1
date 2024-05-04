document.addEventListener("DOMContentLoaded", function () {
  var ham = document.querySelector(".hamburger");
  var navigation = document.querySelector(".navigation");
  ham.addEventListener("click", function () {
    navigation.classList.toggle("showHamburger");
  });
});
