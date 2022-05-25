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
    element.nextElementSibling.classList.toggle("hide");
  });
});

// Nav menu content display toggle
const navContainer = document.getElementsByClassName("nav-menu-container")[0];
const overlay = document.getElementsByClassName("overlay")[0];
const hamclose = document.getElementsByClassName("ham-close")[0];
const hamhide = () => {
  navContainer.classList.toggle("hide");
  overlay.classList.toggle("hide");
};
hamclose.addEventListener("click", hamhide);
