import { createHomePage } from "./home";
import { createMenu } from "./menu";
import { createNavBar } from "./navbar";
import { createContactPage } from "./contact";

const nav = createNavBar();
const main = createHomePage();
const menu = createMenu();
const contact = createContactPage();

nav.Home.addEventListener("click", function () {
  main.className = "main";
  menu.className = "menu-rest hidden";
  contact.className = "contact-form hidden";
  document.body.style.background = "";
  nav.nav.style.background = "";
});

nav.Menu.addEventListener("click", function () {
  main.className = "main hidden";
  contact.className = "contact-form hidden";
  menu.className = "menu-rest";
  document.body.style.background = "#fff6da";
  nav.nav.style.background = "#042f4b";
});

nav.Contact.addEventListener("click", function () {
  main.className = "main hidden";
  menu.className = "menu-rest hidden";
  contact.className = "contact-form";
  document.body.style.background = "#fff6da";
  nav.nav.style.background = "#042f4b";
});

main.addEventListener("click", function () {
  main.className = "main hidden";
  contact.className = "contact-form hidden";
  menu.className = "menu-rest";
  document.body.style.background = "#fff6da";
});
