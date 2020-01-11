function setup() {
    canvas = createCanvas(1500, 450);
    background('white');
    canvas.parent('processing');
    //noLoop();
}

function draw() {
    var aantal=5
    for (var n = 1; n <=aantal;n++){
        tekenBoom();
        tranlate(0,100);
    }
}