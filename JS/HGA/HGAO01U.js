function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  noLoop();
  background(240,240,240);
}

function draw() {
  strokeWeight(40);
  stroke(125,75,25);
  rect(width-255,20,225,225);
  noStroke();
  fill(250,225,175);
  triangle(0,150,450,0,300,450);
  fill(175,150,150);
  ellipse(176/2,height-176/2,176);
}
