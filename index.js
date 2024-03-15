const spritesheet = new Image();

const spriteSize = 64;
const drawSize = 64;

const drawSprite = (ctx, spriteType, spriteFlavor) => {
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

const drawBody = (ctx, spriteFlavor) => {
  drawSprite(ctx, 0, spriteFlavor);
};
const drawEyes = (ctx, spriteFlavor) => {
  drawSprite(ctx, 1, spriteFlavor);
};

const drawMouth = (ctx, spriteFlavor) => {
  drawSprite(ctx, 2, spriteFlavor);
};

const drawHair = (ctx, spriteFlavor) => {
  drawSprite(ctx, 3, spriteFlavor);
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function init(ctx) {
  drawBody(ctx, getRandomInt(8));
  drawEyes(ctx, getRandomInt(8));
  drawMouth(ctx, getRandomInt(8));
  drawHair(ctx, getRandomInt(8));
}

spritesheet.src = 'fishsprites-Sheet.png';
spritesheet.onload = () => {
  const FISH_NUMBER = 1024;

  for (let i = 0; i < FISH_NUMBER; i += 1) {
    const cnv = document.createElement('canvas');
    cnv.className = 'fish';
    cnv.width = 64;
    cnv.height = 64;
    document.getElementById('fish-tank').appendChild(cnv);
    const ctx = cnv.getContext('2d');
    init(ctx);
  }
};
