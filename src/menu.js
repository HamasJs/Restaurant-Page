const HOME = document.getElementById("content");
const createMenu = function () {
  const menu_rest = document.createElement("div");
  menu_rest.className = "menu-rest hidden";

  for (let i = 1; i <= 6; i++) {
    const item = document.createElement("div");
    item.className = "item";

    const item_image = document.createElement("div");
    item_image.className = "item-image";
    item_image.id = `item-image${i}`;
    item_image.innerHTML = `<img src="/images/item-${i}.jpg" alt="" class="image">`;

    const test = document.createElement("div");
    test.className = "test";

    const details = document.createElement("div");
    details.className = "details";
    details.innerHTML = `<h1>Beef Burger</h1>
        <h2>45$</h2>`;

    const hr = document.createElement("hr");
    hr.className = "hr";

    const details_1 = document.createElement("div");
    details_1.className = "details-1";
    details_1.innerHTML = `<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, et ducimus excepturi assumenda quam obcaecati id iste voluptatem ullam provident.</h3>`;

    menu_rest.appendChild(item);
    menu_rest.appendChild(test);

    test.appendChild(details);
    test.appendChild(hr);
    test.appendChild(details_1);

    item.appendChild(item_image);
    item.appendChild(test);
  }

  HOME.appendChild(menu_rest);
  return menu_rest;
};

export { createMenu };
