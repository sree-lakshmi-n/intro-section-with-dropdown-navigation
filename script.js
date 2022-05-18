`use strict`;
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
