const simpleCommand = []
simpleCommand.push(new LordInstructions().BringTroops)
simpleCommand.push('King\'s Landing')
simpleCommand.push(500)
simpleCommand.push(new Date())

simpleCommand[0](simpleCommand[1], simpleCommand[2], simpleCommand[3])

class BringTroopsCommand {
  constructor (location, numberOfTroops, when) {
    this._location = location
    this._numberOfTroops = numberOfTroops
    this._when = when
  }
  execute () {
    let receiver = new LordInstructions()
    receiver.BringTroops(this._location, this._numberOfTroops, this._when)
  }
}
