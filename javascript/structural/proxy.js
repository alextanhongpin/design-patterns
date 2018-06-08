class BarrelCalculator {
  calculateNumberNeeded (volume) {
    return Math.ceil(volume / 357)
  }
}

class DragonBarrelCalculator {
  calculateNumberNeeded (volume) {
    if (!this._barrelCalculator) {
      this._barrelCalculator = new BarrelCalculator()
    }
    return this._barrelCalculator.calculateNumberNeeded(volume * 0.77)
  }
}
