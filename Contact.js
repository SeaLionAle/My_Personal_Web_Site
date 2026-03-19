const Open_Contact = document.querySelectorAll(".Open_Contact");
const Contact = document.getElementById("Contact");
const Body = document.querySelectorAll("aside, #Main, #Portfolio");
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
const Open_Old_Wedding_Website_Link = document.querySelectorAll(
  ".Old_Wedding_Website_Link",
);
Open_Github.forEach((OpenG) => {
  OpenG.addEventListener("click", () => {
    window.open("https://github.com/SeaLionAle/My_Personal_Web_Site", "_blank");
  });
});
Open_Old_Wedding_Website_Link.forEach((OpenW) => {
  OpenW.addEventListener("click", () => {
    window.open("https://github.com/SeaLionAle/OldWeddingWebsite", "_blank");
  });
});

const Open_Discord_Contact = document.getElementById("Open_Discord_Contact");
const Discord_Contact = document.getElementById("Discord_Contact");
const Close_Discord_Contact = document.getElementById("Close_Discord_Contact");
Open_Discord_Contact.addEventListener("click", () => {
  Discord_Contact.classList.add("Show");
  Body.forEach((Section) => {
    Section.classList.add("background-dimmed");
  });
});
Close_Discord_Contact.addEventListener("click", () => {
  Discord_Contact.classList.remove("Show");
  Body.forEach((Section) => {
    Section.classList.remove("background-dimmed");
  });
});

const Open_Linkedin = document.querySelectorAll(".Linkedin_Link");
Open_Linkedin.forEach((OpenL) => {
  OpenL.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/alessiocolombodev", "_blank");
  });
});
