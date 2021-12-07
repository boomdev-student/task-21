import Rocket from '../Rocket';

export default class Rocket2 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket2',
      acceleration: 10,
      handling: 30,
      speed: 50,
      name: 'rocket-2',
    });

    this.fire.x = 300;
    this.fire.y = 200;
    this.fire.angle = -165;
  }
}
