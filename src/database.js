const {Pool} = require("pg")

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "livraria",
    password: "TesteDeBancoDeDados47",
    port: "5432"
})

module.exports = pool