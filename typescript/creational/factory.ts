class Payload {
  weight: number;
  constructor (w:number) {
    this.weight = w
  }
}

class Engine {
  thrust: number;
  constructor (t: number) {
    this.thrust = t
  }
}

class Stage {
  engines: Engine[];
  constructor (e: Engine[]) {
    this.engines = e
  }
}

class Rocket {
  payload: Payload;
  stages: Stage[];
}

class RocketFactory {
  buildRocket(): Rocket {
    let rocket = this.createRocket()
    let payload = this.createPayload()
    let stages = this.createStages()
    rocket.payload = payload
    rocket.stages = stages
    return rocket
  }
  createPayload(): Payload {
    return new Payload(0)
  }
  createStages(): Stage[] {
    let engine = new Engine(1000)
    let stage = new Stage([engine])
    return [stage]
  }
  createRocket(): Rocket {
    return new Rocket()
  }
}


let rocketFactory = new RocketFactory()
let rocket = rocketFactory.buildRocket()

class Satellite extends Payload {
  constructor(
    public id: number
  ){
    super(200)
  }
}
class FirstStage extends Stage {
  constructor() {
    super([
      new Engine(1000),
      new Engine(1000),
      new Engine(1000),
      new Engine(1000)
    ])
  }
}

class SecondStage extends Stage {
  constructor () {
    super([
      new Engine(1000)
    ])
  }
}

type FreightRocketStages = [FirstStage, SecondStage]

class FreightRocketFactory extends RocketFactory {
  nextSatelliteId = 0;
  createPayload (): Satellite {
    return new Satellite(this.nextSatelliteId++)
  }
  createStages (): FreightRocketStages {
    return [
      new FirstStage(),
      new SecondStage()
    ]
  }
}

let freightRocket = new FreightRocketFactory().buildRocket() as FreightRocket