const backgroundImg = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const bkImgComp = document.querySelector("#backgroundImg");

function updateBackground() {
  bkImgComp.src = `assets/${backgroundImg[0]}`;
}

updateBackground();
