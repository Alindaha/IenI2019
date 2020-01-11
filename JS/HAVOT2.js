var verticaal=0;

function setup() {
    canvas = createCanvas(450, 450);
    background('white');
    canvas.parent('processing');
    //noLoop();
}

function draw() {
    background('white');
    fill('black');
    rect(225,verticaal,100,100);
    verticaal++;
}