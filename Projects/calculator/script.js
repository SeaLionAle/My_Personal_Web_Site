const Display = document.getElementById("Display");
let isScientific = false;
let currentExpression = "";
let cursorIndex = 0;

function getMissingParentheses() {
  const openCount = (currentExpression.match(/\(/g) || []).length;
  const closeCount = (currentExpression.match(/\)/g) || []).length;
  return Math.max(0, openCount - closeCount);
}
function setCursor(index, event) {
  if (event) event.stopPropagation();
  cursorIndex = index;
  UpdateDisplay();
  checkAndAddTip("cursor-used", "Did you notice? You can click the display or use arrows to move the cursor!");
}
function UpdateDisplay() {
  const missing = getMissingParentheses();
  let ghostText = "";
  for (let i = 0; i < missing; i++) {
    ghostText += ")";
  }

  let html = "";
  for (let i = 0; i <= currentExpression.length; i++) {
    if (i === cursorIndex) {
      html += `<span class="cursor"></span>`;
    }
    if (i < currentExpression.length) {
      html += `<span class="char" onclick="setCursor(${i}, event)">${currentExpression[i]}</span>`;
    }
  }
  html += `<span class="ghost-paren" onclick="setCursor(${currentExpression.length}, event)">${ghostText}</span>`;
  Display.innerHTML = html;
}
Display.addEventListener("click", () => {
  setCursor(currentExpression.length);
});

function AppendToDisplay(input) {
  currentExpression =
    currentExpression.slice(0, cursorIndex) +
    input +
    currentExpression.slice(cursorIndex);
  cursorIndex += input.length;
  UpdateDisplay();
}
function ClearDisplay() {
  currentExpression = "";
  cursorIndex = 0;
  UpdateDisplay();
}
function Backspace() {
  if (cursorIndex > 0) {
    currentExpression =
      currentExpression.slice(0, cursorIndex - 1) +
      currentExpression.slice(cursorIndex);
    cursorIndex--;
    UpdateDisplay();
  }
}

function SwitchCalculatorType() {
  const keysContainer = document.getElementById("Keys");
  const toggleBtn = document.getElementById("Toggle-Btn");

  isScientific = !isScientific;

  if (isScientific) {
    keysContainer.classList.add("scientific-mode");
    toggleBtn.innerText = "Standard Calculator";
  } else {
    keysContainer.classList.remove("scientific-mode");
    toggleBtn.innerText = "Scientific Calculator";
  }

  if (isScientific) {
    keysContainer.classList.add("scientific-mode");
    toggleBtn.innerText = "Standard Calculator";
    checkAndAddTip("sci-mode", "Awesome! Try using advanced functions like √ or π."); // AGGIUNGI QUESTA RIGA
  }
}

function mathFactorial(n) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
}
function Calculate() {
  if (currentExpression.trim() === "") return;
  checkAndAddTip("calc-done", "Great! Now try clicking the 'Scientific Calculator' button below.");
  const missing = getMissingParentheses();
  for (let i = 0; i < missing; i++) {
    currentExpression += ")";
  }
  try {
    let expression = currentExpression;

    expression = expression.replace(/(\d)(?=\(|π|e|ln|log|abs|√|∛)/g, "$1*");
    expression = expression.replace(
      /(\)|π|e)(?=\d|\(|π|e|ln|log|abs|√|∛)/g,
      "$1*",
    );
    expression = expression.replace(/,/g, ".");
    expression = expression.replace(/π/g, "Math.PI");
    expression = expression.replace(/e/g, "Math.E");
    expression = expression.replace(/ln\(/g, "Math.log(");
    expression = expression.replace(/log\(/g, "Math.log10(");
    expression = expression.replace(/√\(/g, "Math.sqrt(");
    expression = expression.replace(/∛\(/g, "Math.cbrt(");
    expression = expression.replace(/\^/g, "**");
    expression = expression.replace(/%/g, "%");
    expression = expression.replace(/abs\(/g, "Math.abs(");
    expression = expression.replace(/(\d+)!/g, function (match, numero) {
      return mathFactorial(parseInt(numero));
    });

    let result = eval(expression);
    result = Math.round(result * 10000000000) / 10000000000;

    currentExpression = result.toString().replace(".", ",");
    cursorIndex = currentExpression.length;
    UpdateDisplay();
  } catch (error) {
    Display.value = "Error";
    setTimeout(() => {
      ClearDisplay();
    }, 1500);
  }
}
document.addEventListener("keydown", function (event) {
  const ValidKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    ".",
    ",",
    "%",
    "(",
    ")",
    "^",
    "!",
  ];

  if (ValidKeys.includes(event.key)) {
    AppendToDisplay(event.key);
    checkAndAddTip("keyboard-used", "Pro Tip: You can also use your physical keyboard to type!");
  } else if (event.key === "Enter" || event.key === "=") {
    event.preventDefault();
    Calculate();
  } else if (event.key === "Backspace") {
    Backspace();
  } else if (
    event.key === "Escape" ||
    event.key === "Delete" ||
    event.key.toLocaleLowerCase() === "c"
  ) {
    ClearDisplay();
  } else if (event.key === "ArrowLeft") {
    if (cursorIndex > 0) {
      cursorIndex--;
      UpdateDisplay();
    }
  } else if (event.key === "ArrowRight") {
    if (cursorIndex < currentExpression.length) {
      cursorIndex++;
      UpdateDisplay();
    }
  }

});
UpdateDisplay();

// LOCAL STORAGE

const TipsList = document.getElementById("TipsList");

function checkAndAddTip(tipId, message) {
  let shownTips = JSON.parse(localStorage.getItem("calcTips") || "[]");

  if (!shownTips.includes(tipId)) {
    let newTip = document.createElement("li");
    newTip.textContent = message;
    TipsList.appendChild(newTip);
    
    shownTips.push(tipId);
    localStorage.setItem("calcTips", JSON.stringify(shownTips));
    localStorage.setItem("calcTipsHTML", TipsList.innerHTML);
  }
}

function loadTips() {
  TipsList.innerHTML = localStorage.getItem("calcTipsHTML") || "";
  if (!localStorage.getItem("calcTips")) {
    checkAndAddTip("start", "Try a simple calculation like 8 * 8 and press =");
  }
}
loadTips();

// RELOAD AND RETURN

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