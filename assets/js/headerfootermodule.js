// document.addEventListener("DOMContentLoaded", function () {
async function importHeaderFooter() {
  const responseHeader = await fetch("./header.html");
  const responseFooter = await fetch("./footer.html");
  const headerHTML = await responseHeader.text();
  const footerHTML = await responseFooter.text();
  document.body.innerHTML = headerHTML + document.body.innerHTML + footerHTML;
}
importHeaderFooter();
// });
var ham = document.querySelector(".hamburger");
var navigation = document.querySelector(".navigation");
ham.addEventListener("click", function () {
  navigation.classList.toggle("showHamburger");
});
