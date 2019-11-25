var breedte = 100;
var hoogte = 100;
var oppervlakte;

function setup() {
  canvas = createCanvas(900,200);
  background('lavender');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  oppervlakte=breedte*hoogte;
  text("De oppervlakte van één vierkant is " + oppervlakte,5,15);
  noStroke();
  fill('mediumaquamarine');
  translate(50,50);
  rect(0,0,breedte,hoogte);
  
  translate(140,0);
  rect(0,0,breedte,hoogte);
  translate(140,0);
  rect(0,0,breedte,hoogte);
  
  translate(140,0);
  // BEGIN aanpassing
  
  stroke('cornsilk');
  strokeWeight(20);
  fill('teal');
  translate(0,40);  
  rect(0,0,breedte,hoogte);  
  // EINDE aanpassing
  
  translate(140,0);
  rect(0,0,breedte,hoogte);
  translate(140,0);
  rect(0,0,breedte,hoogte);  
}
