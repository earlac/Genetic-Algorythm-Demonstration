
// Constructor function
function Rocket(dna) {
  // Physics of rocket at current instance
  this.pos = createVector(width / 2, height);
  this.vel = createVector();
  this.acc = createVector();
  // Checkes rocket has reached target
  this.gano = false;
  // Checks if rocket had choco
  this.choco = false;
  // Gives a rocket dna
  if (dna) {
    this.dna = dna;
  } else {
    this.dna = new DNA();
  }
  this.fitness = 0;

  // Object can recieve force and add to acceleration
  this.empujar = function(force) {
    this.acc.add(force);
  };
  // Calulates fitness of rocket
  this.calcFitness = function() {
    // Takes distance to target
    var d = dist(this.pos.x, this.pos.y, target.x, target.y);

    // Maps range of fitness
    this.fitness = map(d, 0, width, width, 0);
    // If rocket gets to target increase fitness of rocket
    if (this.gano) {
      this.fitness *= 10;
    }
    // If rocket does not get to target decrease fitness
    if (this.choco) {
      this.fitness /= 10;
    }
  };
  // actualizars state of rocket
  this.actualizar = function() {
    // Checks distance from rocket to target
    var d = dist(this.pos.x, this.pos.y, target.x, target.y);
    // If distance less than 10 pixels, then it has reached target
    if (d < 10) {
      this.gano = true;
      this.pos = target.copy();
    }

    // Rocket has hit left or right of window
    if (this.pos.x > width || this.pos.x < 0) {
      this.choco = true;
    }
    // Rocket has hit top or bottom of window
    if (this.pos.y > height || this.pos.y < 0) {
      this.choco = true;
    }

    //applies the random vectors defined in dna to consecutive frames of rocket
    this.empujar(this.dna.genes[count]);
    // if rocket has not got to goal and not choco then actualizar physics engine
    if (!this.gano && !this.choco) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.vel.limit(4);
    }
  };
  // displays rocket to window
  this.show = function() {
    // push and pop allow's rotating and translation not to affect other objects
    push();
    //color customization of individuos
    noStroke();
    fill(0,155);
    //translate to the postion of rocket
    translate(this.pos.x, this.pos.y);
    rectMode(CENTER);
    rect(0, 0, 15, 15);
    pop();
  };
}
