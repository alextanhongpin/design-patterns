class BasicBeer {
  create () {
    this.addIngredients()
    this.stir()
    this.ferment()
    this.test()
    if (this.testingPassed()) {
      this.distribute()
    }
  }

  addIngredients () {
    throw new Error('Add ingredients needs to be implemented')
  }

  stir () {
    // Stir 15 times with a wooden spoon
  }

  ferment () {
    // Let stand for 30 days
  }

  test () {
    // Draw off a cup of beer and taste it
  }

  testingPassed () {
    throw new Error('Conditions to pass a test must be implemented')
  }

  distribute () {
    // Place beer in 50L casks
  }
}

class RaspberryBeer extends BasicBeer {
  addIngredients () {
    // Add ingredient, probably including raspberries
  }

  testingPassed () {
    // Beer must be reddish and taste of raspberries
  }
}
