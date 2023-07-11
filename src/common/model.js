const EventEmitter = require("./index");

export class Model {
  constructor() {
    this.emitter = EventEmitter;
  }
}
