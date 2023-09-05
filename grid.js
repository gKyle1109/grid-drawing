const mainGrid = document.getElementById("container");
let color = "black"
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


