const mysql = require('mysql2');

// connect to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3001,
    password: 'Football4200$$',
    database: 'employees'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;