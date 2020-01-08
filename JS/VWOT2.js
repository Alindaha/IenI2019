function setup() {
  canvas = createCanvas(1500,450);
  background('white');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
    //A
  fill('black');
  rect(100,150,200,200);
  fill('white');
  stroke('gray');
  triangle(100,150,300,150,200,250);
  triangle(100,350,300,350,200,250);

  //B
  fill('black');
  rect(350,150,200,200);
  fill('white');
  stroke('gray');
  triangle(350,150,550,150,450,350);
  triangle(350,350,550,350,450,150);

  //C
  fill('black');
  rect(600,150,200,200);
  fill('white');
  stroke('gray');
  triangle(600,150,600,350,700,250);
  triangle(800,150,800,350,700,250);

  //D
  fill('black');
  rect(850,150,200,200);
  fill('white');
  stroke('gray');
  triangle(850,150,850,350,1050,250);
  triangle(1050,150,1050,350,850,250);


}