//var z = 200;

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  stroke('black');
  fill('steelblue');
  ellipse(225,225,300,300);
  //fill('white');
  //rect(125,125,z,2*z);
  //fill('yellow');
  //(125,125,325,125,225,325);
}