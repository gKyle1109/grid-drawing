let mainGrid = document.getElementById("drawing-box");

function createGrid() {
    for (let i = 0; i < 400; i++) {
        const newElement = document.createElement("div");
        newElement.classList.add("coloring-block")
        mainGrid.appendChild(newElement);
    }
}
createGrid()
