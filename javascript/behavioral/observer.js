class GetterSetter {
  GetProperty () {
    return this._property
  }
  SetProperty (value) {
    var temp = this._property
    this._property = value
    this._listener.Event(value, temp)
  }
}

class Spy {
  constructor () {
    this._partiesToNotify = []
  }

  subscribe (subscriber) {
    this._partiesToNotify.push(subscriber)
  }

  unsubscribe (subscriber) {
    this._partiesToNotify.remove(subscriber)
  }

  setPainKillers (painKillers) {
    this._painKillers = painKillers
    for (let i = 0, len = this._partiesToNotify.length; i < len; i += 1) {
      this._partiesToNotify[i](painKillers)
    }
  }
}

class Player {
  onKingPainKillerChange (newPainKiller) {
    // Perform some actions
  }
}

const s = new Spy()
const p = new Player()
s.subscribe(p.onKingPainKillerChange)
s.setPainKillers(2)
