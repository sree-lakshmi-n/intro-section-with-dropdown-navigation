`use strict`;
// Nav register active class toggle
const navRegItems = document.getElementsByClassName("nav-register")[0].children;
// Removes all 'active' class name from all elements. Then, adds active class to the clicked element.
const addActiveClass = (element) => {
  const activeElements = document.getElementsByClassName("active")[0];
  activeElements.classList.remove("active");
  element.classList.add("active");
};
// Adds event listener to the nav-register list elements on click.
Array.from(navRegItems).forEach((element) => {
  element.addEventListener("click", () => addActiveClass(element));
});

// Dropdown menu content display toggle
const dropdown = document.getElementsByClassName("nav-menu-dropdown");
Array.from(dropdown).forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("black-colour");
    element.nextElementSibling.classList.toggle("hide");
  });
});

// Nav menu content display toggle
const navContainer = document.getElementsByClassName("nav-menu-container")[0];
const overlay = document.getElementsByClassName("overlay")[0];
const hamburger = document.getElementsByClassName("hamburger")[0];
const hamclose = document.getElementsByClassName("ham-close")[0].children[0];
const hamtoggle = () => {
  navContainer.classList.toggle("hide");
  overlay.classList.toggle("hide");
};
hamburger.addEventListener("click", hamtoggle);
hamclose.addEventListener("click", hamtoggle);

// Check if user is on mobile
// A media condition that targets viewports at most 820px wide
let mediaQuery = window.matchMedia("(max-width: 820px)");

const checkMediaQuery = (e) => {
  // Check if the media query is true
  if (e.matches) navContainer.classList.add("hide");
  else navContainer.classList.remove("hide");
};
// To check for screen size for every screen size change
mediaQuery.addEventListener("change", checkMediaQuery);
// To check for screen size initially
checkMediaQuery(mediaQuery);
