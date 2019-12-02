var hoogte = 100;
var diameter = 400;

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  background('silver');
  noStroke();
  fill('deepskyblue');
  ellipse(450,450,diameter);
  fill('black');
  ellipse(100,hoogte,100);
  hoogte = constrain(hoogte,100,height-50);
  hoogte++;
  diameter++;
}