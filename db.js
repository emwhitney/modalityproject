const Pool = require("pg").pool

const pool = new Pool({
    user: "postgres",
    password: "kth18822",
    host: "localhost",
    port: 5432,
    database: "modalities"
});

module.exports = pool;