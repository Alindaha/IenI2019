var hoogte = 100;
var diameter = 0;

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
  fill('grey');
  ellipse(0,0,diameter);
  fill('black');
  ellipse(100,hoogte,100);
  hoogte = constrain(hoogte,100,height-50);
  diameter = constrain(diameter,0,450);
  hoogte++;
  diameter++;
}