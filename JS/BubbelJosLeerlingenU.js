var xJOS=225;
var yJOS=425;
var level=1;
var xPijl;
var yPijl=375;
var xBubbel=100;
var yBubbel=100;
var dBubbel=50;
var snelheidBubbel=5;
var pAfstand; //afstand tussen de pijl en Jos
var jAfstand; //afstand tussen de bubbel en Jos
var voorraad;
var pijlIsAanwezig;
var achtergrond;

function setup() {
    canvas = createCanvas(450,450);
    background('gray');
    canvas.parent('processing');
    textFont("Verdana");
    textSize(20);
    dBubbel=random(30,80);
    xBubbel=random(dBubbel/2,width-dBubbel/2);
    yBubbel=dBubbel/2;
    voorraad=3;
    pijlIsAanwezig=false;
}

function draw() {
    background('gray');
    tekenJos(xJOS,yJOS);
    tekenBal(xBubbel,yBubbel,dBubbel);
    tekenVoorraad(voorraad);
    fill('black');
    text("Level "+level,10,440);
    gebruikersBesturing();
    bubbelBesturing();
}

function gebruikersBesturing(){
    if (keyIsDown(LEFT_ARROW)) {
        xJOS=xJOS-2;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        xJOS=xJOS+2;
    }
    if(keyIsDown(32) && !pijlIsAanwezig){
        pijlIsAanwezig=true;
        xPijl=xJOS;
    }
    if(pijlIsAanwezig){
        tekenPijl(xPijl,yPijl);  
        if(yPijl<=0 && voorraad==0){
            eindScherm(level-1);
        }
        if(yPijl<=0){
            voorraad--;
            yPijl=375;
            pijlIsAanwezig=false;
        }
        if(keyIsDown(UP_ARROW)){
            yPijl-=2;
        }
        if(keyIsDown(DOWN_ARROW)){
            yPijl-=0.5;
        } else {
            yPijl--;
        }
    }
    xJOS=constrain(xJOS,25,425);
}

function bubbelBesturing(){
    if(xBubbel>(dBubbel/2) && xBubbel<(width-(dBubbel/2))){
        xBubbel=xBubbel+snelheidBubbel;
        yBubbel=yBubbel+0.1*level;
    } else {
        snelheidBubbel*=-1;
        xBubbel=xBubbel+snelheidBubbel;
    }
    pAfstand=dist(xPijl,yPijl,xBubbel,yBubbel);
    if(pAfstand<=(dBubbel/2)){
        level++;
        nieuweBubbel();    
        snelheidBubbel++;
        yPijl=375;
        pijlIsAanwezig=false;
    }
    jAfstand=dist(xJOS,yJOS,xBubbel,yBubbel);
    if(jAfstand<=((dBubbel/2)+25)|| yBubbel>=(height-(dBubbel/2))){
        if(voorraad>0){
            voorraad--;
        } else {
            eindScherm(level-1);
        }
        nieuweBubbel();
        yPijl=375;
    }
}

function nieuweBubbel(){
    dBubbel=random(10,80);
    xBubbel=random(dBubbel/2,width-dBubbel/2);
    yBubbel=dBubbel/2;
}

function eindScherm(score){
    push();
    textSize(50);
    stroke('black');
    strokeWeight(10);
    fill('pink');
    text("Game over! \nJe score is " + score, 75,200);
    noLoop();
    pop();
}

function tekenVoorraad(v){
    push();
    translate(width,height-30);
    for (var i=0;i<v;i++){
        translate(-20,0);
        tekenPijl(0,0);
    }
    pop();
}

function tekenPijl(x,h){
    push();
    noStroke();
    fill('black');
    triangle(x,h,x-10,h+20,x+10,h+20);
    pop();
}

/***************************************************************************
DE CODE HIERONDER IS NODIG VOOR HET WERKEN VAN HET SPEL, 
OVER DEZE CODE KOMEN GEEN VRAGEN OF OPDRACHTEN!
***************************************************************************/

function tekenBal(x,y,d){
    push();
    stroke('gray');
    fill('pink');
    ellipse(x,y,d);
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