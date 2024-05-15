import data from "./data.js";
const productGrid = document.getElementById("productGrid");
const menu = document.getElementById("menu");
// initial cart counter
let counter = 0;
function generateProductCards(data) {
  data.forEach((item) => {
    let card = document.createElement("div");
    let li = document.createElement("li");
    card.className = "card";
    // set id on card for scroll behaviour
    card.id = item.id;
    //card inner items
    card.innerHTML = `
              <div class="image-container">
                  <img src="${item.img}" alt="${item.trim}">
              </div>
              <div class="details">
                  <h3>${item.make}   </h3>
                  <button class="addtoCart">Add To Cart</button>
              </div>
          `;
    productGrid.appendChild(card);
    // menu items
    li.innerHTML = `
              <a href="#${item.id}">
                  ${item.make}
              </a>
          `;
    menu.appendChild(li);
  });
}
// load content on window load
document.addEventListener("DOMContentLoaded", () => {
  generateProductCards(data);
});

const cart = document.getElementById("cart");
// adding events to work for dynamically added elements
document.addEventListener("click", (e) => {
  // select for target of addcart button
  const target = e.target.closest(".addtoCart");
  // only update if button is clicked
  if (target) {
    counter++;
    cart.innerHTML = `
              <span>
                  Cart &nbsp; ${counter}
              </span>
          `;
  }
});
