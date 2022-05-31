var population;
var lifespan = 400;//la vida de la poblacion 
var lifeP;
var secP;
var count = 0;
var target;//objetivo de los cuadros
var fuerza = 0.2;
var popsize = 25; //cantidad de individuos

// Dimensions of barrier
var rx = 100;
var ry = 150;
var rw = 200;
var rh = 10;

function setup() {
  createCanvas(400, 300);
  population = new Population();
  lifeP = createP();
  popP = createP();
  genP = createP();
  target = createVector(width / 2, 50);
}

function draw() {
  background(0);
  population.run();
  // Displays count to window
  lifeP.html(count);
  genP.html("Generacion: " + population.generations + "<br>");
  popP.html("Population Size: " + popsize + "<br>");

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    // Population = new Population();
    count = 0;
  }
  // Renders barrier for individuos

  // Renders target
  ellipse(target.x, target.y, 16, 16);
}
