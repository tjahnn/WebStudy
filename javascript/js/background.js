const backgroundImg = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const bkImgComp = document.querySelector("#backgroundImg");

function updateBackground() {
  const idx = Math.floor(Math.random() * 4);
  document.body.style.backgroundImage = `url(assets/${backgroundImg[idx]})`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

updateBackground();
