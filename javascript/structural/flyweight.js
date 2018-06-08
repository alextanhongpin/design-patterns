class Soldier {
  // constructor() {
  //   this.health = 10
  //   this.fightingAbility = 5
  //   this.hunger = 0
  // }

  // Use prototype getters
  get hunger () {
    return 10
  }

  get fightingAbility () {
    return 5
  }

  get health () {
    return 10
  }
}

let soldier1 = new Soldier()
let soldier2 = new Soldier()
soldier1.health = 7
console.log(soldier1.health, soldier2.health)
