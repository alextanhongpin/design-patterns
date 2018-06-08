class TravelResult {
  constructor (durationInDays, probabilityOfDeath, cost) {
    this.durationInDays = durationInDays
    this.probabilityOfDeath = probabilityOfDeath
    this.cost = cost
  }
}

class SeaGoingVessel {
  travel (source, destination) {
    return new TravelResult(15, 0.25, 500)
  }
}

class Horse {
  travel (source, destination) {
    return new TravelResult(30, 0.25, 50)
  }
}

class Walk {
  travel (source, destination) {
    return new TravelResult(150, 0.55, 0)
  }
}

let currentMoney = getCurrentMoney()
let strategy
if (currentMoney > 500) {
  // Favor fastest and safest strategy
  strategy = new SeaGoingVessel()
} else if (currentMoney > 50) {
  strategy = new Horse()
} else {
  // Favor cheapest
  strategy = new Walk()
}

let travelResult = strategy.travel()
