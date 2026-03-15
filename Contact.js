const Open_Contact = document.querySelectorAll(".Open_Contact");
const Contact = document.getElementById("Contact");
const Body = document.querySelectorAll("aside, #Main");
const Close_Contact = document.getElementById("Close_Contact");

Open_Contact.forEach((Open) => {
  Open.addEventListener("click", () => {
    Contact.classList.add("Show");
    Body.forEach((Section) => {
      Section.classList.add("background-dimmed");
    });
  });
});
Close_Contact.addEventListener("click", () => {
  Contact.classList.remove("Show");
  Body.forEach((Section) => {
    Section.classList.remove("background-dimmed");
  });
});
