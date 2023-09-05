const mainGrid = document.getElementById("container");
const reset = document.getElementById("Reset");
function createGrid() {
    mainGrid.textContent = ""
    for (let i = 0; i < 3000; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("coloring-block");
    mainGrid.appendChild(newDiv)
    }
}
reset.addEventListener("click", createGrid)
let cell = mainGrid.children

const white = document.getElementById("White")
const black = document.getElementById("Black")
const setcolor = document.getElementById("set")
let color = "black"
white.addEventListener("click", () => color = "white")
black.addEventListener("click", () => color = "black")
setcolor.addEventListener("click", colorCode)
function colorCode() {
    for (const block of cell) {
        block.addEventListener("mouseover", () => block.style.backgroundColor = color)
    }
}