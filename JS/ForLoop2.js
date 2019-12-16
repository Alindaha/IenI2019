function setup() {
  canvas = createCanvas(500,500);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  background('silver');
  for(var m=0;m<6;m++){
    for(var n=0;n<6;n++){
        TekenCirkel(50,50,100,'deepskyblue');
        translate(100,0);
    }
    translate(-600,100);
  }
}

function TekenCirkel(x,y,d,kleur){
    noStroke();
    fill(kleur);
    ellipse(x,y,d);
}