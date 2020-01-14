function setup() {
  canvas = createCanvas(1500,450);
  background('white');
  canvas.parent('processing');
  noLoop();
}

function draw() {
    var aantal=4;
    sf=1;
    for(var a=1;a<=aantal;a++){
        sf=sf+a/2;
    }
    text("sf= "+sf,100,50);
}