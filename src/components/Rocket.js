import { Container, Sprite, Texture } from 'pixi.js';
import Arrow from './Arrow';
import Fire from './Fire';

export default class Rocket extends Container {
  constructor({ textureName, name, acceleration, handling, speed }) {
    super();

    this.name = name;

    this._fire = new Fire();

    this._inner = new Container();
    this._inner.addChild(this._fire);

    const rocketTexture = Sprite.from(textureName);
    rocketTexture.anchor.set(0.5, 0.5);

    this._inner.addChild(rocketTexture);
    this.addChild(this._inner);
  }

  get fire() {
    return this._fire;
  }

  ignite() {
    this.fire.ignite();
  }

  extinguish() {
    this.fire.extinguish();
  }
}
