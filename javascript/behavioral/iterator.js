class KingSuccession {
  constructor (inlineForThrone) {
    this.inlineForThrone = inlineForThrone
    this.pointer = 0
  }
  next () {
    return this.inlineForThrone[this.pointer++]
  }
}

let king = new KingSuccession(['Robert', 'Joeffery', 'Tommen'])
console.log(king.next())
console.log(king.next())
console.log(king.next())

class FibonacciIterator {
  constructor () {
    this.previous = 1
    this.beforePrevious = 1
  }
  next () {
    let current = this.previous + this.beforePrevious
    this.beforePrevious = this.previous
    this.previous = current
    return current
  }
}
