const UserNameAlreadyExistsException = require('../domain/exception/name-already-exists.exception');

async function createUserHandler(name, age, ds) {
    try {
        const alreadyExists = await ds.findOneByName(name);
        if (alreadyExists) throw new UserNameAlreadyExistsException(name);

        return await ds.insertUser(name, age);
    } catch (error) {
        console.error(error);
        throw error
    }
}

module.exports = { createUserHandler }