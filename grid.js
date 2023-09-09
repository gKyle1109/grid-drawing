<<<<<<< HEAD
const mainGrid = document.getElementById("container");
const reset = document.getElementById("Reset");
const sizeDis = document.getElementById("grid-size");
const selectSize = document.querySelector("input");
const size = selectSize.value;
selectSize.addEventListener("input", () => {
    sizeDis.textContent = selectSize.value + "X" + selectSize.value
})
function createGrid() {
    mainGrid.textContent = ""
    for (let i = 0; i < 3000; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = "size";
    newDiv.style.height = "size";

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
=======
const displaySize = document.getElementById("size");
const size = document.getElementById("input");
size.addEventListener("input", () => displaySize.textContent = size.value + "X" + size.value);
const container = document.getElementById("container");
let inputSize = size.value;
const reset = document.getElementById("Reset")
function setBlock(widthHeight) {
    const block = document.createElement("div");
    block.classList.add("coloring-block");
    block.style.width = widthHeight + "px";
    block.style.height = widthHeight + "px";
    container.appendChild(block)
}
function createGrid() {
    const numberOfBlocks =  size.value * size.value;
    const widthHeight =  Math.floor(container.clientWidth / size.value);
    for (let i = 0; i < numberOfBlocks; i++) {
        setBlock(widthHeight);
    }
}
createGrid()
function setGrid() {
    container.innerHTML = ""
    createGrid()
}
reset.addEventListener("click", setGrid)

const white = document.getElementById("white");
const black = document.getElementById("black");
function blackColor() {
    const cell = container.children
    for (const block of cell) {
        block.addEventListener("mouseover", () => block.style.backgroundColor = "black")
    }
}
const rgbColors = ["blue", "red", "teal", "beige", "pink", "green", "yellow", "purple"]
function choiceColor() {
    let choice = rgbColors[Math.floor(Math.random() * rgbColors.length)]
    return choice
}
function whiteColor() {
    const cell = container.children
    for (const block of cell) {
        let color = "blue"
        block.addEventListener("mouseover", () => block.style.backgroundColor = choiceColor())
    }
}
black.addEventListener("click", blackColor);
white.addEventListener("click", whiteColor);
>>>>>>> im-gettin-there
