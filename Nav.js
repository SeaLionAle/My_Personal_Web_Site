const Nav_Bar = document.getElementById("Nav_Bar");
const Open_Nav_Bar = document.getElementById("Open_Nav_Bar");
const Close_Nav_Bar = document.getElementById("Close_Nav_Bar");
const Reload_Page = document.getElementById("Reload_Page");
const Open_TodoList = document.getElementById("Open_TodoList");
const Toggle_Apps = document.getElementById("Toggle_Apps");
const Toggle_Apps_Text = document.getElementById("Toggle_Apps_Text");
const Apps_List = document.getElementById("Apps_List");
const Open_Calculator = document.getElementById("Open_Calculator");
const Contact_Nav_Btn = document.getElementById("Contact_Nav_Btn");

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
Open_Calculator.addEventListener("click", () => {
  window.location.href = "Projects/calculator/";
});

function toggleAppsMenu() {
  const isOpening = !Apps_List.classList.contains("Show_Apps");
  Apps_List.classList.toggle("Show_Apps");
  Toggle_Apps.classList.toggle("Rotate_Arrow");
  if (window.innerWidth <= 1024) {
    if (isOpening){
      Reload_Page.classList.add("Hide_Mobile_Item_Animation");
      Contact_Nav_Btn.classList.add("Hide_Mobile_Item_Animation");
      setTimeout(() =>{
        Reload_Page.classList.toggle("Hide_Mobile_Item");
        Contact_Nav_Btn.classList.toggle("Hide_Mobile_Item");
      }, 300);
      Nav_Bar.style.overflowX = "auto";
    } else {
    Reload_Page.classList.remove("Hide_Mobile_Item");
    Contact_Nav_Btn.classList.remove("Hide_Mobile_Item");
    setTimeout(() => {
      Reload_Page.classList.remove("Hide_Mobile_Item_Animation");
      Contact_Nav_Btn.classList.remove("Hide_Mobile_Item_Animation");
    }, 100);
    Nav_Bar.style.overflowX = "hidden";
    Nav_Bar.scrollTo({ left: 0, behavior: "smooth" });
    }
  }
}
Toggle_Apps.addEventListener("click", toggleAppsMenu);
Toggle_Apps_Text.addEventListener("click", toggleAppsMenu);
