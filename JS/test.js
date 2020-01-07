function setup() {
  canvas = createCanvas(1500,450);
  background('white');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
    //A
  noStroke();
  fill('black');
  ellipse(150,250,200);
  fill('white');
  stroke('gray');
  ellipse(200,250,200);

  //B
  noStroke();
  fill('black');
  ellipse(500,250,200);
  fill('white');
  stroke('gray');
  ellipse(450,250,200);

  //C
  noStroke();
  fill('black');
  ellipse(800,250,200);
  fill('white');
  stroke('gray');
  ellipse(800,250,150);

  //D
  noStroke();
  fill('black');
  ellipse(1200,250,200);
  fill('white');
  stroke('gray');
  ellipse(800,250,250);
}