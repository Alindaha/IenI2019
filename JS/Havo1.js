var hoogte = 100;
var diameter = 0;

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  background('silver');
  TekenCirkel(450,450,diameter,'deepskyblue');
  TekenCirkel(0,0,diameter,'grey');
  TekenCirkel(100,hoogte,100,'black');
  hoogte = constrain(hoogte,100,height-50);
  hoogte++;
  diameter++;
}

function TekenCirkel(x,y,d,kleur){
    noStroke();
    fill(kleur);
    ellipse(x,y,d);
}