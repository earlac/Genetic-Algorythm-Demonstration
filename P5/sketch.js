var population;
var lifespan = 400;//la vida de la poblacion 
var lifeP;
var secP;
var count = 0;
var target;//objetivo de los cuadros
var fuerza = 0.2;
var popsize = 25; //cantidad de individuos

function setup() {
  createCanvas(400, 300);
  population = new Population();
  lifeP = createP();
  popP = createP();
  genP = createP();
  target = createVector(width / 2, 50);
}

function draw() {
  background(color(0, 0, 255));
  population.run();
  lifeP.html("Esperanza de vida: " +count);
  genP.html("Generacion: " + population.generations + "<br>");
  popP.html("Population Size: " + popsize + "<br>");

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    count = 0;
  }
  ellipse(target.x, target.y, 16, 16);  // Crea el objetivo a alcanzar
}
