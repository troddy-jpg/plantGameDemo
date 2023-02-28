import deepai from 'deepai'

let plant, medium;
let imgDim = 200;

function preload() {
  plant = loadImage('placeholder-plant.webp');
  medium = loadImage('placeholder-medium.webp');
}

async function doAPIshit(prompt) {
  deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');
  const resp = await deepai.callStandardApi('3d-objects-generator', {
    text: prompt,
    width: '512',
    height: '512',
    grid_size: '2',
  });
  return resp.output_url;
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  background(255);

  // Example usage
  doAPIshit('a red chair').then(url => {
    // use the generated image URL
    console.log(url);
  }).catch(error => {
    // handle errors
    console.error(error);
  });


  //place plant image at center of the screen, a little below the top
  //place medium image a bit below the plant image
  image(plant, (width / 2) - (imgDim / 2), height / 20, imgDim, imgDim);
  image(medium, width /2 - (imgDim/2), height / 10 + imgDim, imgDim, imgDim);
  
  
  //draw a line from bottom middle of first image to top middle of second image
  line(width / 2, height / 20 + imgDim, width / 2, height / 10 + imgDim);

}

function draw() {

}
