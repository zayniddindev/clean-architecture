const EventEmitter = require("./event");

export class Model {
  constructor() {
    this.emitter = EventEmitter;
  }
}
