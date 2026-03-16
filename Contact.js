const Open_Contact = document.querySelectorAll(".Open_Contact");
const Contact = document.getElementById("Contact");
const Body = document.querySelectorAll("aside, #Main");
const Close_Contact = document.getElementById("Close_Contact");

Open_Contact.forEach((OpenC) => {
  OpenC.addEventListener("click", () => {
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

const Open_Github = document.querySelectorAll(".Github_Link");

Open_Github.forEach((OpenG) => {
  OpenG.addEventListener("click", () => {
    window.open("https://github.com/SeaLionAle/My_Personal_Web_Site", "_blank");
  });
});
