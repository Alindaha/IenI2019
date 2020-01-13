var xDier=0;
var yDier=0;
var kleur='white'

function setup() {
  canvas = createCanvas(500,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
    background('silver');
    translate(80,100);
    tekenDier(xDier,yDier);
    translate(110,80);
}

function tekenDier(x,y){
    noStroke();
    fill('white');
    ellipse(x-30,y-30,30,80);
    ellipse(x+30,y-30,30,80);
    fill('pink');
    ellipse(x-30,y-25,20,60);
    ellipse(x+30,y-25,20,60);
    fill('white');
    ellipse(x,y,100);
    fill('black');
    ellipse(x-20,y-10,15,10);
    ellipse(x+20,y-10,15,10);
}