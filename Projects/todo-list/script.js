const InputBox = document.getElementById("Input-box");
const Listcontainer = document.getElementById("List_Container");
const TipsList = document.querySelector("#Tips ul");

function Addtask() {
  if (InputBox.value === "") {
    alert("Oops! You can't add an empty task. Please type something first.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `<i class="fa-regular fa-square"></i> <span class="task-text">${InputBox.value}</span>`;

    let closeIcon = document.createElement("i");
    closeIcon.className = "fa-solid fa-x close";
    li.appendChild(closeIcon);

    Listcontainer.appendChild(li);

    const taskCount = Listcontainer.children.length;
    if (taskCount === 1) {
      checkAndAddTip(
        "click-check",
        "Great! Now click the checkbox to mark it as done.",
      );
    } else if (taskCount === 2) {
      checkAndAddTip("refresh-page", "Now, try refreshing the page (F5).");
      localStorage.setItem("readyForRefreshMessage", "true");
    }
  }
  InputBox.value = "";
  saveData();
}

Listcontainer.addEventListener(
  "click",
  function (e) {
    if (
      e.target.classList.contains("close") ||
      (e.target.tagName === "SPAN" && !e.target.classList.contains("task-text"))
    ) {
      e.target.parentElement.remove();
      checkAndAddTip(
        "have-fun",
        "You're all set! Use this app to manage your real tasks.",
      );
      saveData();
    } else {
      let li = e.target.closest("li");
      if (li) {
        li.classList.toggle("checked");

        let icon = li.querySelector("i:not(.close)");
        if (icon) {
          if (li.classList.contains("checked")) {
            icon.className = "fa-regular fa-square-check";
            checkAndAddTip(
              "add-different",
              "Awesome. Try adding a second task.",
            );
          } else {
            icon.className = "fa-regular fa-square";
          }
        }
        saveData();
      }
    }
  },
  false,
);
function checkAndAddTip(tipId, message) {
  let shownTips = JSON.parse(localStorage.getItem("shownTips") || "[]");

  if (!shownTips.includes(tipId)) {
    let newTip = document.createElement("li");
    newTip.textContent = message;
    TipsList.appendChild(newTip);
    shownTips.push(tipId);
    localStorage.setItem("shownTips", JSON.stringify(shownTips));
    localStorage.setItem("tipsHTML", TipsList.innerHTML);
  }
}

function saveData() {
  localStorage.setItem("data", Listcontainer.innerHTML);
}
function showTask() {
  Listcontainer.innerHTML = localStorage.getItem("data") || "";

  TipsList.innerHTML =
    localStorage.getItem("tipsHTML") ||
    `<li>Type "Hello World!" in the input box below.</li><li>Click the "Add" button to save it.`;
  if (localStorage.getItem("readyForRefreshMessage") === "true") {
    checkAndAddTip(
      "after-refresh",
      "Magic! 🪄 Your tasks survived the refresh thanks to LocalStorage.",
    );
    checkAndAddTip("click-x", "Click the 'X' to delete a task.");
    localStorage.removeItem("readyForRefreshMessage");
  }
}
showTask();

const ReturnPortfolio = document.getElementById("Return_Portfolio");

ReturnPortfolio.addEventListener("click", () => {
  window.open("../../index.html", "_self");
});

const ResetButton = document.getElementById("Reset_Page");

ResetButton.addEventListener("click", () => {
  if (
    confirm(
      "Are you sure you want to clear all data? This will delete your tasks and reset the tutorial.",
    )
  ) {
    localStorage.clear();
    location.reload();
  }
});
