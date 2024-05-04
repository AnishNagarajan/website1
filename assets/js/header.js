function importHeaderFooter() {
  var ham = document.querySelector(".hamburger");
  var navigation = document.querySelector(".navigation");
  if (ham && navigation) {
    ham.addEventListener("click", function () {
      navigation.classList.toggle("showHamburger");
    });
  } else {
    console.error(
      "Element with class '.hamburger' or '.navigation' not found."
    );
  }
}
