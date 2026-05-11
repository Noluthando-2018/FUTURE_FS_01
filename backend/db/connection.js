const mysql  = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host:     process.env.DB_HOST     || 'localhost',
  port:     parseInt(process.env.DB_PORT) || 3306,
  user:     process.env.DB_USER     || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME     || 'portfolio_db',
  waitForConnections: true,
  connectionLimit:    10,
  charset:            'utf8mb4',
});


(async () => {
  try {
    const conn = await pool.getConnection();
    console.log('✅  MySQL Workbench connection successful');
    conn.release();
  } catch (err) {
    console.error('❌  MySQL connection failed:', err.message);
    console.error('    → Make sure MySQL is running in Workbench');
    console.error('    → Check DB_USER and DB_PASSWORD in your .env file');
    process.exit(1);
  }
})();

module.exports = pool;
