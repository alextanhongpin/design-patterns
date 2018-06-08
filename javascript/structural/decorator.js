class BasicArmor {
  calculateDamageFromHit (hit) {
    return 1
  }
  getArmorIntegrity () {
    return 1
  }
}

class ChainMail {
  constructor (decoratedArmor) {
    this.decoratedArmor = decoratedArmor
  }

  calculateDamageFromHit (hit) {
    hit.strength = hit.strength * 0.8
    return this.decoratedArmor.calculateDamageFromHit(hit)
  }
  getArmorIntegrity () {
    return 0.9 * this.decoratedArmor.getArmorIntegrity()
  }
}

let armor = new ChainMail(new BasicArmor())
console.log(armor.calculateDamageFromHit({
  location: 'head',
  weapon: 'sock filled with pennies',
  strength: 12
}))
