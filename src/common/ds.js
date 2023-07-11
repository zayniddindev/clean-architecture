class Ds {
    tables = [];
    constructor(options) {
        this.options = options
    }

    addTable(table_name, cols) {
        this.tables.push({ table_name, cols, values: [] })
    }

    table(table_name) {
        return this.tables.find((value) => value.table_name = table_name) || [];
    }
}

const ds = new Ds({});
ds.addTable('users', ['name', 'age']);
console.log(ds);

module.exports = ds;