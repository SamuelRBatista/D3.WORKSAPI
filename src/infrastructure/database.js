// src/infrastructure/database.js
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "samuka.201232",
  database: "quiz_db",
});

const promisePool = pool.promise();

module.exports = promisePool;
