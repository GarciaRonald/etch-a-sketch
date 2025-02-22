"use strict"

const gridContainer = document.querySelector("#grid-container");

const gridSize = 16;

// Create 16x16 grid
for (let gridEle = 1; gridEle <= gridSize * gridSize; gridEle++) {
    const gridCell = document.createElement("div");
    gridCell.style.width = `${100 / gridSize}%`;
    gridCell.style.height = `${100 / gridSize}%`;

    gridContainer.appendChild(gridCell);
}