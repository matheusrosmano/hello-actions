console.log('Inicia o script ...')

require('dotenv').config()

let mysql = require('mysql')
let connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: 10,
    connectTimeout: 15000
})

connection.connect(err => {
    if (err) {
        throw err
    }
    console.log('Conectado com sucesso')
})

let sql = "insert into funcionario(nome) values('teste')"

connection.query(sql, (err, result) => {
    if (err) {
        throw err
    }
    console.log('Registro inserido com sucesso')
})

connection.end(err => {
    if (err) {
        throw err
    }
    console.log('Conexão finalizada com sucesso.')
})