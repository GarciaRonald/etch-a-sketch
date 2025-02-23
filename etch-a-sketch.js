"use strict"

const sizeButton = document.querySelector("#grid-size");
const gridContainer = document.querySelector("#grid-container");
let gridSize = 16;
const randomButton = document.querySelector("#random-colors");
const onOffText = document.querySelector("#random");
let randomColor = false;

// Toggle random colors
randomButton.addEventListener("click", () => {
    randomColor = !randomColor;
    onOffText.textContent = randomColor ? "ON" : "OFF";
});

// Create grid
const createGrid = gridSize => {
    gridContainer.innerHTML = "";
    for (let gridEle = 1; gridEle <= gridSize * gridSize; gridEle++) {
        const gridCell = document.createElement("div");
        gridCell.style.width = `${100 / gridSize}%`;
        gridCell.style.height = `${100 / gridSize}%`;

        gridContainer.appendChild(gridCell);

        gridCell.addEventListener("mouseover", () => {
            if (!randomColor) {
                gridCell.style.backgroundColor = "rgb(0, 0, 255)";
                gridCell.style.opacity = "1";
            }
        });
    }
};

createGrid(gridSize);

// Change grid size based on user input
sizeButton.addEventListener("click", () => {
    gridSize = parseInt(prompt("Please enter a new grid size. Min: 1; Max: 100"));
    if (gridSize < 1 || gridSize > 100) {
        alert("Please enter a number between 1 and 100");
        return;
    }
    createGrid(gridSize);
});