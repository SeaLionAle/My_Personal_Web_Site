const Nav_Bar = document.getElementById("Nav_Bar");
const Open_Nav_Bar = document.getElementById("Open_Nav_Bar");
const Close_Nav_Bar = document.getElementById("Close_Nav_Bar");
const Reload_Page = document.getElementById("Reload_Page");

Close_Nav_Bar.addEventListener("click", () => {
  Nav_Bar.classList.add("Hide");
  setTimeout(() => {
    Open_Nav_Bar.style.display = "flex";
  }, 400);
});

Open_Nav_Bar.addEventListener("click", () => {
  Open_Nav_Bar.style.display = "none";
  Nav_Bar.classList.remove("Hide");
});

Reload_Page.addEventListener("click", () => {
  location.reload();
  window.open("Index.html", "_self");
});
