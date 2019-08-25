const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'biography'
})

db.connect(function (error) {
  if (error) {
    console.log(error)
  }
})

module.exports = db