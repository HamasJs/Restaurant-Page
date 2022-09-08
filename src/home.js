"use strict";
const HOME = document.getElementById("content");

const createHomePage = function () {
  const main = document.createElement("div");
  main.className = "main";
  const text = document.createElement("div");
  text.className = "text";
  text.innerHTML =
    "<h4>Order the best cusines made by our top Chefs!</h4> <h5>Menu</h5>";
  const burger = document.createElement("div");
  burger.className = "burger";
  HOME.appendChild(main);
  main.appendChild(text);
  main.appendChild(burger);
  return main;
};

export { createHomePage };
