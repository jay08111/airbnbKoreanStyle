const removeItem = document.querySelector(".remove-item");
const secondArea = document.querySelector(".second-area");
const main = document.querySelector(".main");
removeItem.addEventListener("click", () => {
  main.removeChild(secondArea);
});
