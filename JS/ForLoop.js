function setup() {
  canvas = createCanvas(500,500);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  background('silver');
  noStroke();
  fill('deepskyblue');
  ellipse(50,250,100);
  translate(100,0);
  ellipse(50,250,100);
  translate(100,0);
  ellipse(50,250,100);
  translate(100,0);
  ellipse(50,250,100);
  translate(100,0);
  ellipse(50,250,100);
}

/*function TekenCirkel(x,y,d,kleur){
    noStroke();
    fill(kleur);
    ellipse(x,y,d);
}*/