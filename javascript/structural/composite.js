class SimpleIngredient {
  constructor (name, calories, ironContent, vitaminContent) {
    this.name = name
    this.calories = calories
    this.ironContent = ironContent
    this.vitaminContent = vitaminContent
  }

  getName () {
    return this.name
  }

  getCalorie () {
    return this.calories
  }

  getIronContent () {
    return this.getIronContent
  }

  getVitaminContent () {
    return this.vitaminContent
  }
}

class CompoundIngredient {
  constructor (name) {
    this.name = name
    this.ingredients = []
  }
  addIngredient (ingredient) {
    this.ingredients.push(ingredient)
  }
  getName () {
    return this.name
  }
  getCalories () {
    return this.ingredients.reduce((total, ingredient) => total + ingredient.getCalories(), 0)
  }
  getIronContent () {
    return this.ingredients.reduce((total, ingredient) => total + ingredient.getIronContent(), 0)
  }
  getVitaminContent () {
    return this.ingredients.reduce((total, ingredient) => total + ingredient.getVitaminContent(), 0)
  }
}

let egg = new SimpleIngredient('egg', 155, 6, 0)
let milk = new SimpleIngredient('milk', 42, 0, 0)
let sugar = new SimpleIngredient('sugar', 387, 0, 0)
let rice = new SimpleIngredient('rice', 370, 8, 0)

let ricePudding = new CompoundIngredient('Rice pudding')
ricePudding.addIngredient(egg)
ricePudding.addIngredient(rice)
ricePudding.addIngredient(milk)
ricePudding.addIngredient(sugar)

console.log('A serving of rice pudding contains:', ricePudding.getCalories(), 'calories')
