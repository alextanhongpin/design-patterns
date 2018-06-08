class Event {
  constructor (name) {
    this.name = name
  }
}

class Prize {
  constructor (name) {
    this.name = name
  }
}

class Attendee {
  constructor (name) {
    this.name = name
  }
}

class Tournament {
  constructor () {
    this.events = []
  }
}

// Concrete Factory
class LannisterTournamentBuilder {
  build () {
    let tournament = new Tournament()
    tournament.events.push(new Event('Joust'))
    tournament.events.push(new Event('Melee'))

    tournament.attendees.push(new Attendee('Jamie'))

    tournament.prizes.push(new Prize('Gold'))
    tournament.prizes.push(new Prize('More Gold'))
    return tournament
  }
}

// Concrete Factory
class BaratheonTournamentBuilder {
  build () {
    let tournament = new Tournament()
    tournament.events.push(new Event('Joust'))
    tournament.events.push(new Event('Melee'))

    tournament.attendees.push(new Attendee('Stannis'))
    tournament.attendees.push(new Attendee('Robert'))

    return tournament
  }
}

// Director
class TournamentBuilder {
  build (builder) {
    return builder.build()
  }
}
