const navToggle = document.querySelector(".nav-toggle i");
const mobileNavLinks = document.querySelector(".mobile-nav-links");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("fa-xmark");
  mobileNavLinks.style.display = mobileNavLinks.style.display == "none" ? "block" : "none";
});
