var diameter = 0;

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  background('silver');
  if(diameter<=200) {
      fill('white');
  }
  else {
      fill('yellow');
  }
  ellipse(width/2,height/2,diameter);
  diameter=constrain(diameter,0,450);
  diameter++;
}
