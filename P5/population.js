
function Population() {
  // Array of individuos
  this.individuos = [];
  // Amount of individuos
  this.cantIndividuos = 25;
  // Amount padre rocket partners
  this.listaPadres = [];

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
  // Selects appropriate genes for child
  this.selection = function() {
    var nIndividuos = [];
    for (var i = 0; i < this.individuos.length; i++) {
      // Picks random dna
      var padreA = random(this.listaPadres.slice(0,3)).dna;
      var padreB = random(this.listaPadres).dna;
      // Creates child by using cruzar function
      var child = padreA.cruzar(padreB);
      child.mutar();
      // Creates new rocket with child dna
      nIndividuos[i] = new Rocket(child);
    }
    // This instance of individuos are the new individuos
    this.individuos = nIndividuos;
  };

  // Calls for actualizar and show functions
  this.run = function() {
    for (var i = 0; i < this.cantIndividuos; i++) {
      this.individuos[i].actualizar();
      // Displays individuos to screen
      this.individuos[i].show();
    }
  };
}
