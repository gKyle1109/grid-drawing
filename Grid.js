const mainGrid = document.getElementById("drawing-box");
const tenXGrid = document.getElementById("10X");
const twentyXGrid = document.getElementById("20X");
twentyXGrid.addEventListener("click", createGrid20);
tenXGrid.addEventListener("click", createGrid10);

function createGrid20() {
    mainGrid.textContent = ""
    for (let i = 0; i < 400; i++) {
        const newElement = document.createElement("div");
        newElement.classList.add("coloring-block");
        newElement.style.width = "20px";
        newElement.style.height = "20px";
        mainGrid.appendChild(newElement);
    }
}
function createGrid10() {
    mainGrid.textContent = ""
    for (let i = 0; i < 100; i++) {
        const newElement = document.createElement("div");
        newElement.classList.add("coloring-block");
        newElement.style.width = "40px";
        newElement.style.height = "40px";
        mainGrid.appendChild(newElement);
    }
}
