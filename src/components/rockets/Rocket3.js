import Rocket from '../Rocket';

export default class Rocket3 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket3',
      acceleration: 30,
      handling: 10,
      speed: 30,
      name: 'rocket-3',
    });

    this.fire.scale.set(0.5, 0.5);
    this.fire.x = 110;
    this.fire.y = 50;
    this.fire.angle = -135;
  }
}
