class WorldState {
  constructor (numberOfKings, currentKingInKingsLanding, season) {
    this.numberOfKings = numberOfKings
    this.currentKingInKingsLanding = currentKingInKingsLanding
    this.season = season
  }
}

class WorldStateProvider {
  saveMemento () {
    return new WorldState(this.numberOfKings, this.currentKingInKingsLanding, this.season)
  }

  restoreMemento (memento) {
    this.numberOfKings = memento.numberOfKings
    this.currentKingInKingsLanding = memento.currentKingInKingsLanding
    this.season = memento.season
  }
}

class Soothsayer {
  constructor () {
    this.startingPoints = []
    this.currentState = new WorldStateProvider()
  }

  setInitialConditions (numberOfKings, currentKingInKingsLanding, season) {
    this.currentState.numberOfKings = numberOfKings
    this.currentState.currentKingInKingsLanding = currentKingInKingsLanding
    this.currentState.season = season
  }

  alterNumberOfKingsAndForetell (numberOfKings) {
    this.startingPoints.push(this.currentState.saveMemento())
    this.currentState.numberOfKings = numberOfKings
  }

  alterSeasonAndForetell (season) {}

  alterCurrentKingInKingsLandingAndForetell (currentKingInKingsLanding) {}

  tryADifferentChange () {
    this.currentState.restoreMemento(this.startingPoints.pop())
  }
}
