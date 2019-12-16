function setup() {
  canvas = createCanvas(500,500);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  background('silver');
  for(var n=0;n<6;n++){
    TekenCirkel(50,250,100,'deepskyblue');
    translate(100,0);
  }
}

function TekenCirkel(x,y,d,kleur){
    noStroke();
    fill(kleur);
    ellipse(x,y,d);
}