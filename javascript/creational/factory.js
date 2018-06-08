const WateryGod = () => ({
  prayTo () {}
})
const AncientGod = () => ({
  prayTo () {}
})

const DefaultGod = () => ({
  prayTo () {}
})

const GodFactory = () => ({
  Build (godName) {
    switch (godName) {
      case 'watery':
        return WateryGod()
      case 'ancient':
        return AncientGod()
      default:
        return DefaultGod()
    }
  }
})

// Usage
const Prayer = () => ({
  pray (godName) {
    GodFactory().Build(godName).prayTo()
  }
})
