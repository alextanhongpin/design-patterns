class ShipAdapter {
  constructor () {
    this._ship = new Ship()
  }

  TurnLeft () {
    this._ship.SetRudderAngleTo(-30)
    this._ship.SetSailAngle(3, 12)
  }

  TurnRight () {
    this._ship.SetRudderAngleTo(30)
    this._ship.SetSailAngle(5, -9)
  }

  GoForward () {
    // Do something else
  }
}

// Usage
const ship = new ShipAdapter()
ship.GoForward()
ship.TurnLeft()
