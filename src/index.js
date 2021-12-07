import Application from './core/Application';
import * as PIXI from 'pixi.js';

window.PIXI = PIXI;

document.addEventListener('DOMContentLoaded', () => {
  const app = new Application();
  window.__PIXI_APP = app;
});
