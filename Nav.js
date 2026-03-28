const Nav_Bar = document.getElementById("Nav_Bar");
const Open_Nav_Bar = document.getElementById("Open_Nav_Bar");
const Close_Nav_Bar = document.getElementById("Close_Nav_Bar");
const Reload_Page = document.getElementById("Reload_Page");
const Open_TodoList = document.getElementById("Open_TodoList");
const Toggle_Apps = document.getElementById("Toggle_Apps");
const Toggle_Apps_Text = document.getElementById("Toggle_Apps_Text");
const Apps_List = document.getElementById("Apps_List");

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
  window.open("index.html", "_self");
});

Open_TodoList.addEventListener("click", () => {
  window.location.href = "Projects/todo-list/";
});

function toggleAppsMenu() {
  Apps_List.classList.toggle("Show_Apps");
  Toggle_Apps.classList.toggle("Rotate_Arrow");
  if (window.innerWidth <= 1024) {
    if (Apps_List.classList.contains("Show_Apps")) {
      Nav_Bar.style.overflowX = "visible";
    } else {
      Nav_Bar.style.overflowX = "hidden";
      Nav_Bar.scrollTo({ left: 0, behavior: "smooth" });
    }
  }
}
Toggle_Apps.addEventListener("click", toggleAppsMenu);
Toggle_Apps_Text.addEventListener("click", toggleAppsMenu);
