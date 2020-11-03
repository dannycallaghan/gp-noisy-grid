var stepSize = 20;

function setup() {
  createCanvas(500, 500);

  noiseSeed(0);
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);

  noiseDetail(2);

  colorGrid();
  compassGrid();
}
///////////////////////////////////////////////////////////////////////
function colorGrid(){
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
      let x = i * stepSize;
      let y = j * stepSize;
      let scale = mouseX;
      var n = noise(x / scale, y / scale, frameCount / scale);
      let fromColor = color(255, 0, 0);
      let toColor = color(0, 255, 0);
      let fillColor = lerpColor(fromColor, toColor, n);
      noStroke();
      fill(fillColor);
      rect(x, y, stepSize, stepSize);
    }
  }
}
///////////////////////////////////////////////////////////////////////
function compassGrid(){

  
  strokeWeight(1);

  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {

      let x = (i * stepSize) + stepSize / 2;
      let y = (j * stepSize) + stepSize / 2;

      let scale = 5000;

      var n = noise(x / scale, y / scale, frameCount / scale);
      
      var r = map(n, 0, 1, 0, 720);


      push()
      stroke(0);
      translate(x, y);
      rotate(r);
      line(0, 0, 0, -stepSize);
      pop();

      

    }
  }
}
