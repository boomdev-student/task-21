import Rocket from '../Rocket';

export default class Rocket4 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket4',
      acceleration: 30,
      handling: 5,
      speed: 70,
      name: 'rocket-4',
    });

    this.fire.scale.set(0.35, 0.35);
    this.fire.x = 93;
    this.fire.y = 90;
    this.fire.angle = -90;
  }
}
