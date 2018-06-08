class Base {
  state: number;
}

let base = new Base()
base.state = 0

class Derived extends Base {}
Derived.prototype = base

// derived object will keep the state of the base object
let derived = new Derived()