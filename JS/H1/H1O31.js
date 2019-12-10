kleur='white';

function setup() {
  canvas = createCanvas(501,501);
  canvas.parent('processing');
  background('coral');
  noLoop();
}

function draw() {
  for (var rij = 0;rij < 501;rij += 50) {
    for (var kolom = 0;kolom < 501;kolom += 50) { 
      fill(kleur);
      rect(kolom,rij,50,50);
      if(kleur=='white'){
          kleur='red';
      } else {
          kleur='white';
      }
    }
    
  }
}