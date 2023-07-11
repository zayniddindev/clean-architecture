module.exports = class UserNameAlreadyExistsException extends Error {
  constructor(name) {
    super(`User with name ${name} already exists in the system!`);
  }
}
