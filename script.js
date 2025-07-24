let previousScroll = window.pageYOffset;
const logo = document.querySelector(".logo");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset;

  if (currentScroll > previousScroll) {
    // Scrolling down: hide logo
    logo.style.opacity = "0";
  } else {
    // Scrolling up: show logo
    logo.style.opacity = "1";
  }
  previousScroll = currentScroll;
});
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    // scrolling down
    navbar.style.top = "-80px"; // hides the navbar
  } else {
    // scrolling up
    navbar.style.top = "0"; // shows the navbar
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
// Scroll Button
// Scroll to Top
function scrollToTop(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
}
