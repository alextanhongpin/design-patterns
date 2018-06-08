
class SelectiveNamePrinterVisitor {
  visit (memberOfArmy) {
    if (memberOfArmy._type === 'Knight') {
      this.visitKnight(memberOfArmy)
    } else {
      console.log('Not a Knight')
    }
  }
  visitKnight (memberOfArmy) {
    memberOfArmy.printName()
  }
}

class Knight {
  constructor () {
    this._type = 'Knight'
  }
  printName () {
    console.log('knight')
  }
  visit (visitor) {
    visitor.visit(this)
  }
}

let collection = []
collection.push(new Knight())
collection.push(new FootSoldier())
collection.push(new Lord())
collection.push(new Archer())

let visitor = new SelectiveNamePrinterVisitor()

for (let i = 0, len = collection.length; i < len; i += 1) {
  collection[i].visit(visitor)
  // if (collection[i]._type === 'Knight') {
  //   collection[i].printName()
  // } else {
  //   console.log('Not a Knight')
  // }
}
