const container = document.getElementById("container");
const blackButton = document.getElementById("black");
const greyscaleButton = document.getElementById("greyscale");
const colorButton = document.getElementById("color-picker");
const eraseButton = document.getElementById("erase");
const resetButton = document.getElementById("reset");

function makeRows(rows) {
  container.style.setProperty('--grid-rows', rows);
  for (let i = 0; i < rows * rows; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item grey";
  };
};

function makeButtonsRespond()
{
    blackButton.addEventListener("click", e => {
        cells.forEach(cell => cell.addEventListener("mouseover", e => {
            e.target.style.setProperty("--cell-color", "black")
        }))
    })
    resetButton.addEventListener("click", e => {
        cells.forEach(cell => cell.style.setProperty("--cell-color", "white"))
    })
    colorButton.addEventListener("click", e => {
        cells.forEach(cell => cell.addEventListener("mouseover", e => {
            e.target.style.setProperty("--cell-color", document.getElementById("color-picker").value)
        }))
    })
    eraseButton.addEventListener("click", e => {
        cells.forEach(cell => cell.addEventListener("mouseover", e => {
            e.target.style.setProperty("--cell-color", "white")
        }))
    })
}  
makeRows(16);
const cells = document.querySelectorAll(".grid-item");

makeButtonsRespond();