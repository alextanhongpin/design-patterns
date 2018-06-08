class Karstark {
  constructor (greatLord) {
    this.greatLord = greatLord
  }
  receiveMessage (message) {}
  sendMessage (message) {
    this.greatLord.routeMessage(message)
  }
}

class HouseStark {
  constructor () {
    this.karstark = new Karstark(this)
    this.bolton = new Bolton(this)
    this.frey = new Frey(this)
    this.umber = new Umber(this)
  }

  routeMessage (message) {}
}
