class Singleton {
  bar = 'bar'
  foo(): void {
    console.log(this.bar)
  }

  private static _default: Singleton

  static get default(): Singleton {
    if (!Singleton._default) {
      Singleton._default = new Singleton()
    }
    return Singleton._default
  }
}