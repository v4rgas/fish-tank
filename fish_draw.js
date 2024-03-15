const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
const spritesheet = new Image();

const spriteSize = 64;
const drawSize = 64;

const drawSprite = (spriteType, spriteFlavor) => {
  ctx.drawImage(
    spritesheet,
    spriteSize * spriteFlavor,
    spriteSize * spriteType,
    spriteSize,
    spriteSize,
    0,
    0,
    drawSize,
    drawSize,
  );
};

const drawBody = (spriteFlavor) => {
  drawSprite(0, spriteFlavor);
};
const drawEyes = (spriteFlavor) => {
  drawSprite(1, spriteFlavor);
};

const drawMouth = (spriteFlavor) => {
  drawSprite(2, spriteFlavor);
};

const drawHair = (spriteFlavor) => {
  drawSprite(3, spriteFlavor);
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function init() {
  drawBody(getRandomInt(8));
  drawEyes(getRandomInt(8));
  drawMouth(getRandomInt(8));
  drawHair(getRandomInt(8));
}

spritesheet.src = 'fishsprites-Sheet.png';
spritesheet.onload = () => {
  init();
};
