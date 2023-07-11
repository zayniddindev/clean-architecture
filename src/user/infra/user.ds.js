const ds = require('../../common/ds')

class UserDs {
    constructor() {
        this.ds = ds
    }

    async findOneByName(name) {
        return this.ds.table('users').values.find((value) => value.name == name)
    }

    async insertUser(name, age) {
        this.ds.table('users').values.push({ name, age })
        console.log(ds.table('users'));
        return this.ds.table('users').values.find((value) => value.name == name)
    }
}

module.exports = new UserDs()