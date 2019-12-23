var xJOS=225;
var yJOS=425;
var level=1;
var xPijl;
var yPijl=375;
var xBal=100;
var yBal=100;
var dBal=50;
var sBal=5;
var afstand;
var voorraad;
var scores;


function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  dBal=random(30,80);
  xBal=random(dBal/2,width-dBal/2);
  yBal=dBal/2;
  voorraad=1;
  //noLoop();
}

function draw() {
  background('silver');
  fill('black');
  text("Level: "+level,10,440);
  scores=new Array(5,10,6);
  tekenJos(xJOS,yJOS);
  tekenBal(xBal,yBal,dBal);
  tekenVoorraad(voorraad);
  if(level==1){
      text("New game!",50,50);
  }
  if (keyIsDown(LEFT_ARROW)) {
    xJOS=xJOS-2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xJOS=xJOS+2;
  }
  if(keyIsDown(32)){
      tekenPijl(xJOS,yPijl);  
      yPijl--;
      if(yPijl==0 && voorraad==0){
          scores.push(level);
          level=1;
          dBal=random(30,80);
          xBal=random(dBal/2,width-dBal/2);
          yBal=dBal/2;
          sBal=5;
          voorraad=1;
          yPijl=375;
      }
      if(yPijl==0){
          voorraad--;
          yPijl=375;
      }
  }
  if(keyIsDown(32)==false){
      yPijl=375;
  }
  if(xBal>(dBal/2) && xBal<(width-(dBal/2))){
    xBal=xBal+sBal;
  } else {
      sBal*=-1;
      xBal=xBal+sBal;
      yBal=yBal+level;
  }
  afstand=dist(xJOS,yPijl,xBal,yBal);
  if(afstand<=(dBal/2)){
      level++;
      dBal=random(10,80);
      xBal=random(dBal/2,width-dBal/2);
      yBal=dBal/2;
      sBal++;
      yPijl=375;
  }
  if(keyIsDown(81)){
      eindScherm();
  }
}

function eindScherm(){
    push();
    background('black');
    fill('pink');
    text("Je wilt stoppen...\nDit zijn de scores:\n", 50,50);
    for(var i=0;i<scores.length;i++){
        fill('pink');
        text("Poging "+(i+1)+": "+scores[i]+scores.length,50,((i*15)+100));
    }
    noLoop();
    pop();
}

function tekenVoorraad(v){
    push();
    noStroke();
    fill('grey');
    translate(width,height-30);
    for (var i=0;i<v;i++){
        translate(-20,0);
        triangle(0,0,-10,20,10,20);
    }
    pop();
}

function tekenBal(x,y,d){
    push();
    fill('pink');
    ellipse(x,y,d);
    pop();
}

function tekenPijl(x,h){
    push();
    noStroke();
    fill('grey');
    triangle(x,yPijl,x-10,yPijl+20,x+10,yPijl+20);
    h=h+10;
    pop();
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