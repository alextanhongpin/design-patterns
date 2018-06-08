class OldGods {
  prayTo (sacrifice) {
    console.log('We Old Gods hear your prayer')
  }
}

class DrownedGods {
  prayTo (humanSacrifice) {
    console.log('*BUBBLE* GURGLE')
  }
}

class SevenGods {
  prayTo (prayerPurpose) {
    console.log('Sorry there are a lot of us, it gets confusing here. Did you pray for something?')
  }
}

class OldGodsAdapter {
  constructor () {
    this._oldGods = new OldGods()
  }
  prayTo () {
    const sacrifice = new Sacrifice()
    this._oldGods.prayTo(sacrifice)
  }
}

class DrownedGodAdapter {
  constructor () {
    this._drownedGod = new DrownedGods()
  }

  prayTo () {
    const sacrifice = new HumanSacrifice()
    this._drownedGod.prayTo(sacrifice)
  }
}

class SevenGodsAdapter {
  constructor () {
    this._sevenGods = new SevenGods()
  }
  prayTo () {
    this._sevenGods.prayTo(this.prayerPurposeProvider.GetPurpose())
  }
}

let Religion = {
  OldGodsAdapter,
  DrownedGodAdapter,
  SevenGodsAdapter
}

const god1 = new Religion.OldGodsAdapter()
const god2 = new Religion.DrownedGodAdapter()
const god3 = new Religion.SevenGodsAdapter()

const gods = [god1, god2, god3]
for (let i = 0, len = gods.length; i < len; i += 1) {
  gods[i].prayTo()
}
