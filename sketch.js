let plant, medium;
let imgDim = 200;
function preload() {
  plant = loadImage('placeholder-plant.webp');
  medium = loadImage('placeholder-medium.webp');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(255);

  //place plant image at center of the screen, a little below the top
  //place medium image a bit below the plant image
  image(plant, (width / 2) - (imgDim / 2), height / 20, imgDim, imgDim);
  image(medium, width /2 - (imgDim/2), height / 10 + imgDim, imgDim, imgDim);
  
  
  //draw a line from bottom middle of first image to top middle of second image
  line(width / 2, height / 20 + imgDim, width / 2, height / 10 + imgDim);
}

function draw() {
}