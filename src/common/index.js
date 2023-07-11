const Events = require("events");

class MyEventEmitter extends Events {
  constructor() {
    super();
  }
}

module.exports = new MyEventEmitter();
