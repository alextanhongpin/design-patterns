class KingJoffery {
  makeDecision () {}
  marry () {}
}

class LordTywin {
  makeDecision () {}
}

class KingAerys {
  makeDecision () {}
}

class LordConnington {
  makeDecision () {}
}

class LanisterFactory {
  getKing () {
    return new KingJoffery()
  }
  getHandOfKing () {
    return new LordTywin()
  }
}

class TargaryenFactory {
  getKing () {
    return new KingAerys()
  }

  getHandOfKing () {
    return new LordConnington()
  }
}

class CourtSession {
  constructor (abstractFactory) {
    this.abstractFactory = abstractFactory
    this.COMPLAINT_THRESHOLD = 10
  }

  complainPresented (complaint) {
    if (complaint.severity < this.COMPLAINT_THRESHOLD) {
      this.abstractFactory.getHandOfKing().makeDecision()
    } else {
      this.abstractFactory.getKing().makeDecision()
    }
  }
}

// Usage
let courtSession1 = new CourtSession(new TargaryenFactory())
courtSession1.complainPresented({severity: 8})
courtSession1.complainPresented({severity: 12})

let courtSession2 = new CourtSession(new LanisterFactory())
courtSession2.complainPresented({severity: 8})
courtSession2.complainPresented({severity: 12})
