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
  rocketPop = createP();
  target = createVector(370, height/2);
}

function draw() {
  background(color(0, 0, 255));
  population.run();
  
  lifeP.html("Esperanza de vida: " +count);
  genP.html("Generacion: " + population.generations + "<br>");
  popP.html("Tamano de la poblacion: " + popsize + "<br>");


  count++;
  if (count == lifespan) {
    
    population.evaluate();
    population.mostrarDatos();
    population.selection();
    count = 0;
  }
  ellipse(target.x, target.y, 16, 16);
  fill('rgb(100%,0%,10%)');  // Crea el objetivo a alcanzar
}
