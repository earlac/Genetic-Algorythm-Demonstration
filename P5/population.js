//prueba
function Population() {
  // Array of individuos
  this.individuos = [];
  // Amount of individuos
  this.cantIndividuos = popsize;
  // Amount padre rocket partners
  this.listaPadres = [];
  this.generations = 0;
  pruebaP = createP();
  // Associates a rocket to an array index
  for (var i = 0; i < this.cantIndividuos; i++) {
    this.individuos[i] = new Rocket();
  }

  this.evaluate = function() {
    var maxfit = 0;
    // Iterate through all individuos and calcultes their fitness
    for (var i = 0; i < this.cantIndividuos; i++) {
      // Calculates fitness
      this.individuos[i].calcFitness();
      // If current fitness is greater than max, then make max equal to current
      if (this.individuos[i].fitness > maxfit) {
        maxfit = this.individuos[i].fitness;
      }
    }
    // Normalises fitnesses
    for (var i = 0; i < this.cantIndividuos; i++) {
      this.individuos[i].fitness /= maxfit;
    }

    this.listaPadres = [];
    // Take individuos fitness make in to scale of 1 to 100
    // A rocket with high fitness will highly likely will be in the mating pool
    for (var i = 0; i < this.cantIndividuos; i++) {
      var n = this.individuos[i].fitness * 100;
      for (var j = 0; j < n; j++) {
        this.listaPadres.push(this.individuos[i]);
      }
    }


  };
  this.selection = function() {
    var nIndividuos = [];
    for (var i = 0; i < this.individuos.length; i++) {
      var padreA = random(this.listaPadres.slice(0,3)).dna;
      var padreB = random(this.listaPadres).dna;
      var child = padreA.cruzar(padreB);
      child.mutar();
      nIndividuos[i] = new Rocket(child);
    }
    this.individuos = nIndividuos;
    this.generations++;
  };

  this.run = function() {
    for (var i = 0; i < this.cantIndividuos; i++) {
      this.individuos[i].actualizar();
      this.individuos[i].show();
      //pruebaP = createP();
      //pruebaP.html(this.individuos[i].fitness);
    }
  };

  this.mostrarDatos= function(){
    pruebaP.html("");
    var textoMostrar="";
    for (var i = 0; i < this.cantIndividuos; i++) {
      textoMostrar+= "Individuo #"+ i+ " , fitness: "+ this.individuos[i].fitness+ "<br>";
      
    }
    
    pruebaP.html(textoMostrar);
  };
}
