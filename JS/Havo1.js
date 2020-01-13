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
  for(var i=0; i<4;i++){
    if(i==0){
        kleur='gray';
    } else {
        kleur='white';
    }
    tekenDier(xDier,yDier,kleur);
    translate(110,80);
  }
  xDier++;
}

function tekenDier(x,y,kleur){
    noStroke();
    fill(kleur);
    ellipse(x-30,y-30,30,80);
    ellipse(x+30,y-30,30,80);
    fill('pink');
    ellipse(x-30,y-25,20,60);
    ellipse(x+30,y-25,20,60);
    fill(kleur);
    ellipse(x,y,100);
    fill('black');
    ellipse(x-20,y-10,15,10);
    ellipse(x+20,y-10,15,10);
    fill('brown');
    triangle(x-10,y+10,x+10,y+10,x,y+20);
}