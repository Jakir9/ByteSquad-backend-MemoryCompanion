import { pool } from "../db/db.js";
import app from "../app.js";

app.post('/api', (req, res) => {
    const { user_id, firstName, lastName } = req.body;
    if (!checkUserExists(user_id)) {
      const query = 'INSERT INTO users (user_id, first_name, last_name) VALUES ($1, $2, $3)';
      const values = [user_id, firstName, lastName];
  
      pool.query(query, values, (error, result) => {
        if (error) {
          console.error('Error inserting user:', error);
          res.status(500).json({ error: 'Error inserting user' });
        } else {
          res.status(201).json({ message: 'User created successfully' });
        }
      });
    }
  });
  
  function checkUserExists (user_id) {
    
      const query = 'SELECT * FROM users WHERE user_id = $1';
      const values = [user_id];
  
      pool.query(query, values => {
        if  ( values.rows.length === 0 ){
          return false
        } else {
         return true
        }
        });
    }
