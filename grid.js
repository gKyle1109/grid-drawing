const displaySize = document.getElementById("size");
const size = document.getElementById("input");
size.addEventListener("input", () => displaySize.textContent = size.value + "X" + size.value);
const container = document.getElementById("container");

function setBlock(widthHeight) {
    const block = document.createElement("div");
    block.classList.add("coloring-block");
    block.style.width = widthHeight + "px";
    block.style.height = widthHeight + "px";
    container.appendChild(block)
}
function createGrid () {
    const numberOfBlocks =  size.value * size.value;
    const widthHeight =  Math.floor(container.clientWidth / size.value);
    for (let i = 0; i < numberOfBlocks; i++) {
        setBlock(widthHeight);
    }
}
createGrid()
