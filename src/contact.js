"use strict";
const HOME = document.getElementById("content");

const createContactPage = function () {
  const contact_form = document.createElement("div");
  contact_form.className = "contact-form hidden";

  const address = document.createElement("div");
  address.className = "address";
  address.innerHTML =
    '<h3 class="contact-details">➕ 1024 Oakwood AveSan Diego, CA 22434<h3><h3 class="contact-details">🕛 Mon-Thurs: 8am-8pmFri-Sun: 8am-11pm<h3><h3 class="contact-details">📞 (222)-888 5555<h3><h3 class="contact-details">😋 Message US<h3>';

  const input = document.createElement("div");
  input.className = "inp";
  input.innerHTML =
    '<div class="inp"><label for="">Name</label><input type="text" name="Name" id="" placeholder="Name"><label for="">Email</label><input type="Email" name="Name" id="" placeholder="Email"><label for="">Message</label><input type="text" name="Name" id="" placeholder="Enter your Message"><button class="send">Send</button>';

  HOME.appendChild(contact_form);
  contact_form.appendChild(address);
  contact_form.appendChild(input);

  return contact_form;
};
export { createContactPage };
