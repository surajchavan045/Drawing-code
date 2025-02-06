const boxes = document.querySelectorAll(".child");
const eraseBtn = document.getElementById("erase-button");

let color = "red";

eraseBtn.onclick = () => {
    color = "white";
  };
  

let isMouseClicked = false;

document.onmousedown = () => {
    isMouseClicked = true;
}

document.onmouseup = () => {
    isMouseClicked = false;
}

for (let i = 0; i <= 64; i++) {
    boxes[i].onmouseenter = () => {
        if (isMouseClicked === true) {
            boxes[i].style.backgroundColor = color;
        }
    };
}

