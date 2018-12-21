import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const connectionString = process.env.DATABASE_URL;
// const connectionString = 'hoxtygen://hoxtygen:clusters1988@localhost:5432/library';
const pool = new Pool({
  connectionString,
});

//  connect to database
pool.connect((err) => {
  if (err) {
    return console.log('Unable to access the database');
  }
  console.log('Connected');
});
export default pool;
