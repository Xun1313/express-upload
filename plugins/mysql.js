const mysql = require('mysql');
const pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'alienmazu',
  //connectTimeout : 10000,
  //connectionLimit : 10000
});

const db = {
  /* query: sql => {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) reject(err)
        
        connection.query({sql: sql}, (error, results, fields) => {
          error ? reject(error) : resolve(results)

          connection.release()
        })
      })
    })
  }, */
  query: sql => {
    return new Promise((resolve, reject) => {
      pool.query({ sql: sql }, (error, results) => {
        error ? reject(error) : resolve(results)
      })
    })
  },
}

module.exports = db