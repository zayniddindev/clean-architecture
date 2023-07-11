const { Model } = require("../../../common/model");
const { UserWasCreatedEvent } = require("../evets/user-was-ceated.event");

class User extends Model {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }

  create(name, age) {
    this.emitter.emit("user-was-created", new UserWasCreatedEvent(name, age));
  }
}

module.exports = User