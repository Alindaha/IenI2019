var diameter = 300;
var bY=450;
var gY=0;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  colorMode(RGB, 255, 255, 255, 1);
  noStroke();
}

function draw() {
  background(255,255,255,1);
  fill(255,0,0,0.5);
  ellipse(width / 2,height / 2,diameter);
  fill(0,255,0,0.5);
  ellipse(width / 2,gY,diameter);
  fill(0,0,255,0.5);
  ellipse(width / 2,bY,diameter);
  bY-=1;
  gY+=1;
}