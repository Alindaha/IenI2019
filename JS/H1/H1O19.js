var p = 100;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  frameRate(50);

}

function draw() {
  background('snow');
  tekenRechthoek(p);  
  tekenVierkant(p);
  tekenLijnen(p);
  p += 0.5;
  if (p > width) {
    noLoop();
  }
}

function tekenRechthoek(p) {
  push();
  strokeWeight(1);
  stroke('green');
  line(p,0,width,height-p);
  line(width,height-p,width-p,height);
  line(width-p,height,0,p);
  line(0,p,p,0);
  pop();
}

function tekenVierkant(p) {
  push();
  strokeWeight(1);
  stroke('red');
  line(p,0,width,p);
  line(width,p,width-p,height);
  line(width-p,height,0,height-p);
  line(0,height-p,p,0);
  pop();
}

function tekenLijnen(p) {
  push();
  strokeWeight(1);
  stroke('grey');
  line(0,p,width,p);
  line(0,height - p,width,height - p);
  pop();
}