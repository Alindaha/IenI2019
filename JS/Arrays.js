var naam1="Lars";
var naam2="Dolf";
var naam3="Hendrik";
var naam4="Lili";
var naam5="Tessa";

var namen= new Array("Lars","Dolf","Hendrik","Lili","Tessa");

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  textFont("Georgia");
  textSize(40);
  noLoop();
}

function draw() {
    //namen.push("Luuk");
    //namen.pop();
    namen.shift();
    //namen.sort();
    for (var n = 0;n < namen.length;n++) {
        fill('black');
        text(namen[n],100,48*(n + 1));
    }
}