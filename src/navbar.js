const HOME = document.getElementById("content");

const createNavBar = function () {
  const nav = document.createElement("nav");
  nav.className = "navbar";
  const heading = document.createElement("div");
  heading.className = "heading";
  heading.textContent = "TASTE IT!";
  const links = document.createElement("div");
  links.className = "links";
  const Home = document.createElement("li");
  Home.className = "Home";
  Home.textContent = "Home";
  const Menu = document.createElement("li");
  Menu.className = "Menu";
  Menu.textContent = "Menu";
  const Contact = document.createElement("li");
  Contact.className = "Contact";
  Contact.textContent = "Contact";

  HOME.appendChild(nav);
  nav.appendChild(heading);
  nav.appendChild(links);
  links.appendChild(Home);
  links.appendChild(Menu);
  links.appendChild(Contact);

  return { nav, Home, Menu, Contact };
};

export { createNavBar };
