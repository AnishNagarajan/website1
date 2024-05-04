// // document.addEventListener("DOMContentLoaded", function () {
// async function importHeaderFooter() {
//   const responseHeader = await fetch("./header.html");
//   const responseFooter = await fetch("./footer.html");
//   const headerHTML = await responseHeader.text();
//   const footerHTML = await responseFooter.text();
//   document.body.innerHTML = headerHTML + document.body.innerHTML + footerHTML;
// }
// importHeaderFooter();
// // });
// var ham = document.querySelector(".hamburger");
// var navigation = document.querySelector(".navigation");
// ham.addEventListener("click", function () {
//   navigation.classList.toggle("showHamburger");
// });

export function insertHeaderAndFooter() {
  fetch("./header.html")
    .then((response) => response.text())
    .then((html) => {
      const header = document.querySelector("header");
      header.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error loading header:", error);
    });

  fetch("./footer.html")
    .then((response) => response.text())
    .then((html) => {
      const footer = document.querySelector("footer");
      footer.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error loading footer:", error);
    });
}
