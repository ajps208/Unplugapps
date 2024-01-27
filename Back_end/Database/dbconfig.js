// dbConfig.js
const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'unpluggs',
};

const db = mysql.createConnection(dbConfig);

module.exports = db;
