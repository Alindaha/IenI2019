var xJOS=225;
var yJOS=425;
var level=1;
var yPijl=375;
var xBal=100;
var yBal=100;
var dBal=50;
var sBal=5;
var pAfstand;
var jAfstand;
var voorraad;
var achtergrond;

function preload(){
    achtergrond=loadImage("images/GrijzeCirkelsM.jpg");
}

function setup() {
    canvas = createCanvas(450,450);
    background(achtergrond);
    canvas.parent('processing');
    dBal=random(30,80);
    xBal=random(dBal/2,width-dBal/2);
    yBal=dBal/2;
    voorraad=3;
    textFont("Verdana");
    textSize(20);
}

function draw() {
    background(achtergrond);
    fill('black');
    tekenJos(xJOS,yJOS);
    tekenBal(xBal,yBal,dBal);
    tekenVoorraad(voorraad);
    text("Level "+level,10,440);
    gebruikersBesturing();
    if(xBal>(dBal/2) && xBal<(width-(dBal/2))){
        xBal=xBal+sBal;
        yBal=yBal+0.1*level;
    } else {
        sBal*=-1;
        xBal=xBal+sBal;
    }
    pAfstand=dist(xJOS,yPijl,xBal,yBal);
    if(pAfstand<=(dBal/2)){
        level++;
        dBal=random(10,80);
        xBal=random(dBal/2,width-dBal/2);
        yBal=dBal/2;
        sBal++;
        yPijl=375;
    }
    jAfstand=dist(xJOS,yJOS,xBal,yBal);
    if(jAfstand<=((dBal/2)+25)|| yBal>=(height-(dBal/2))){
        if(voorraad>0){
            voorraad--;
        } else {
            eindScherm(level-1);
        }
        dBal=random(10,80);
        xBal=random(dBal/2,width-dBal/2);
        yBal=dBal/2;
        yPijl=375;
    }
}

function gebruikersBesturing(){
    if (keyIsDown(LEFT_ARROW)) {
        xJOS=xJOS-2;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        xJOS=xJOS+2;
    }
    if(keyIsDown(32)){
        tekenPijl(xJOS,yPijl);  
        yPijl--;
        if(yPijl<=0 && voorraad==0){
            eindScherm(level-1);
        }
        if(yPijl<=0){
            voorraad--;
            yPijl=375;
        }
        if(keyIsDown(UP_ARROW)){
            yPijl-=2;
        }
    }
    if(keyIsDown(32)==false){
      yPijl=375;
    }
    xJOS=constrain(xJOS,25,425);
}

function eindScherm(score){
    push();
    textSize(50);
    stroke('black');
    strokeWeight(10);
    //background('black');
    fill('pink');
    text("Game over! \nJe score is " + score, 75,200);
    noLoop();
    pop();
}

function tekenVoorraad(v){
    push();
    noStroke();
    fill('black');
    translate(width,height-30);
    for (var i=0;i<v;i++){
        translate(-20,0);
        triangle(0,0,-10,20,10,20);
    }
    pop();
}

function tekenBal(x,y,d){
    push();
    stroke('gray');
    fill('pink');
    ellipse(x,y,d);
    pop();
}

function tekenPijl(x,h){
    push();
    noStroke();
    fill('black');
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