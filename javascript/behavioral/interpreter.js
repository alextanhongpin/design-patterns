class Battle {
  constructor (battleGround, aggresor, defender, victor) {
    this.battleGround = battleGround
    this.aggresor = aggresor
    this.defender = defender
    this.victor = victor
  }
}

class Parser {
  constructor (battleText) {
    this.battleText = battleText
    this.currentIndex = 0
    this.battleList = battleText.split('\n')
  }

  nextBattle () {
    if (!this.battleList[0]) {
      return null
    }
    let segments = this.battleList[0].match(/\((.+?)\s?->\s?(.+?)\s?<-\s?(.+?)\s?->\s?(.+)/)
    return new Battle(segments[2], segments[1], segments[3], segments[4])
  }
}

let text = '(Robert -> River <- Targayen -> Baratheon)'
let p = new Parser(text)
console.log(p.nextBattle())
