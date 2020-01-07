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

  //B
  noStroke();
  stroke('gray');
  fill('white');
  ellipse(750,250,200);
  fill('black');
  ellipse(800,250,200);

  //D
  noStroke();
  fill('black');
  ellipse(1050,250,200);
  fill('white');
  stroke('gray');
  ellipse(1050,250,150);


}