var xJOS=225;
var yJOS=425;

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  background('silver');
  tekenJos(xJOS,yJOS);
  if (keyIsDown(LEFT_ARROW)) {
    xJOS=xJOS-2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xJOS=xJOS+2;
  }
  if(keyIsDown(32)){
      yJOS=yJOS-2;
      tekenPijl(xJOS);
  }
}

function tekenPijl(x){
    
}

function tekenJos(x,y,s) {
  push();
  translate(x,y);
  scale(s); 
  noStroke();
  fill('indianred');
  ellipse(0,0,50);
  fill('slategray');
  ellipse(-7,-10,17);
  ellipse(7,-10,17);
  fill('white');
  ellipse(-7,-8,7,13);
  ellipse(7,-8,7,13);
  fill('orange');
  ellipse(0,3,17);
  stroke('slategray');
  strokeWeight(3);
  fill('white');
  arc(0, 13, 26, 13, 0, PI, CHORD);
  pop();
}