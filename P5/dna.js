
function DNA(genes) {
  if (genes) {
    this.genes = genes;
  }
  // If no genes just create random dna
  else {
    this.genes = [];
    for (var i = 0; i < lifespan; i++) {
      // Gives random vectors
      this.genes[i] = p5.Vector.random2D();
      // Sets maximum force of vector to be applied to a rocket
      this.genes[i].setMag(fuerza);
    }
  }
  // Performs a cruzar with another member of the species
  this.cruzar = function(partner) {
    var nGenes = [];
    // Picks random midpoint
    var mid = floor(random(this.genes.length));
    for (var i = 0; i < this.genes.length; i++) {
      // If i is greater than mid the new gene should come from this partner
      if (i > mid) {
        nGenes[i] = this.genes[i];
      }
      // If i < mid new gene should come from other partners gene's
      else {
        nGenes[i] = partner.genes[i];
      }
    }
    // Gives DNA object an array
    return new DNA(nGenes);
  };

  // Adds random mutar to the genes to add variance.
  this.mutar = function() {
    for (var i = 0; i < this.genes.length; i++) {
      // if random number less than 0.01, new gene is then random vector
      if (random(1) < 0.01) {
        this.genes[i] = p5.Vector.random2D();
        this.genes[i].setMag(fuerza);
      }
    }
  };
}
