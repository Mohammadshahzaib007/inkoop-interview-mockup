// for navigation menu

// hamburger icon button
const iconBtn = document.querySelector("#icon-btn");

// side nav container
const sideNav = document.querySelector(".side-nav");

// x icon
const crossIcon = document.querySelector("#cross-icons");

// for opening nav on the mobile
iconBtn.addEventListener("click", () => {
  sideNav.style.transform = "translateX(0)";
  sideNav.style.width = "60%";
});

// for closing nav on the mobile
crossIcon.addEventListener("click", () => {
  sideNav.style.transform = "translateX(-200%)";
});
