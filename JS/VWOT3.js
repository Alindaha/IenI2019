

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  textFont("Georgia");
  textSize(40);
  noLoop();
}

function draw() {
    var scores= new Array(25,65,13,34,78);
    scores.pop();
    scores.sort();
    scores.push(54);
    scores.shift();
    for (var n = 0;n < scores.length;n++) {
        fill('black');
        text(scores[n],100,48*(n + 1));
    }
}