const stepSize = 20;
const colorOne = [255, 0, 0];
const colorTwo = [0, 0, 255];
const lineThickness = 2;
const noiseDetails = 8;

/**
 * P5 setup functionality
 * 
 * @return void.
 */
function setup() {
  createCanvas(500, 500);
}

/**
 * P5 draw functionality
 * 
 * @return void.
 */
function draw() {
  background(125);

  noiseDetail(noiseDetails);

  colorGrid();
  compassGrid();
}

/**
 * Looks after the colours in the grid
 * 
 * @return void.
 */
function colorGrid(){
  const frame = frameCount;
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
      // Coords of tiles
      let x = i * stepSize;
      let y = j * stepSize;
      let scale = mouseX || width; // Instantiate with a value or you can get a blank screen
      var n = noise(x / scale, y / scale, frame / scale);
      let fromColor = color(...colorOne);
      let toColor = color(...colorTwo);
      let fillColor = lerpColor(fromColor, toColor, n);
      noStroke();
      fill(fillColor);
      rect(x, y, stepSize, stepSize);
    }
  }
}

/**
 * Looks after the lines in the grid
 * 
 * @return void.
 */
function compassGrid(){
  strokeWeight(lineThickness);
  const frame = frameCount;
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
      // Coords of tiles
      const tileX = i * stepSize;
      const tileY = j * stepSize;
      // Coords of compasses
      const compassX = tileX + stepSize / 2;
      const compassY = tileY + stepSize / 2;

      const scaleX = mouseX || width; // Instantiate with a value or you can get a blank screen
      const scaleY = mouseY || height; // Instantiate with a value or you can get a blank screen

      // Noise for rotation and colour
      const n = noise(compassX / scaleX, compassY / scaleX, frame / scaleX);
      // Noise for line length
      const n2 = noise(compassX, compassY, frame / scaleY);
      
      // Line rotation value
      const r = map(n, 0, 1, 0, 720);
      // Line colour one value
      const c1 = map(n, 0, 1, 0, 255);
      // Line colour two value
      const c2 = map(n, 0, 1, 0, 255);
      // Line length
      const l = map(n2, 0, 1, 1, stepSize * 2);

      push()
      stroke(c1, c2, 0);
      translate(compassX, compassY);
      angleMode(DEGREES);
      rotate(r);
      line(0, 0, 0, -l);
      pop();
    }
  }
}
