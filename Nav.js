const Nav_Bar = document.getElementById("Nav_Bar");
const Open_Nav_Bar = document.getElementById("Open_Nav_Bar");
const Close_Nav_Bar = document.getElementById("Close_Nav_Bar");
const Reload_Page = document.getElementById("Reload_Page");

if (window.innerWidth <= 1024) {
  // MOBILE:
  Nav_Bar.style.transition = "none";
  Nav_Bar.classList.add("Hide");
  void Nav_Bar.offsetHeight;
  Nav_Bar.style.transition = "";
} else {
  // PC:
  Open_Nav_Bar.style.transition = "none";
  Open_Nav_Bar.classList.add("Hide_Icon");
  void Open_Nav_Bar.offsetHeight;
  Open_Nav_Bar.style.transition = "";
}
Close_Nav_Bar.addEventListener("click", () => {
  Nav_Bar.classList.add("Hide");
  setTimeout(() => {
    Open_Nav_Bar.classList.remove("Hide_Icon");
  }, 300);
});

Open_Nav_Bar.addEventListener("click", () => {
  Open_Nav_Bar.classList.add("Hide_Icon");
  Nav_Bar.classList.remove("Hide");
});
Reload_Page.addEventListener("click", () => {
  location.reload();
  window.open("Index.html", "_self");
});
