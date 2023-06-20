import { pool } from "../db/db.js";

export async function getEvent(userId) {
  // Query the database and return all authors
  const user_Id = userId
  // Parameterized query to prevent SQL injection
  // This is why we pass the userId as a parameter to the query
  // and not just concatenate ($'') it into the query string
  // hence the userId as the second parameter to the query function outside query string
  // if we were to concatenate the userId in the query, the value would be interpreted as a string and printed which is not what we want as it is sensitive information
  const events = await pool.query('SELECT * FROM events WHERE user_id = $1', [user_Id]);  
  console.log(events.rows);
  return events.rows;
}

getEvent(1);

export async function createEvent(event) {
  // Query the database to create a new event and return the newly created event 
  const events = await pool.query('INSERT INTO events (user_id, event_name, event_date, event_time) VALUES ($1, $2, $3, $4) RETURNING *', [event.user_id, event.event_name, event.event_date, event.event_time]);
}
// export async function searchAuthorsByName(searchTerm) {
//   // Query the database and return all authors that have a name matching the searchTerm
//   const authors = await pool.query('select * from authors where last_name LIKE $1 OR first_name LIKE $1', [`%${searchTerm}%`]);  
//   console.log(authors.rows);
//   return authors.rows;
// }

// export async function getAuthorById(id) {
//   // Query the database and return the book with a matching id
//   const authors = await pool.query('SELECT * FROM authors INNER JOIN books ON authors.id = books.author_id WHERE author_id = $1', [id]);
//   console.log(authors.rows);
//   return authors.rows;
// }

// export async function createAuthor(author) {
//   // Query the database to create an author and return the newly created author
//   const authors = await pool.query('INSERT INTO authors (first_name, last_name) VALUES ($1, $2) RETURNING *', [author.first_name, author.last_name]);
//   return authors.rows[authors.rows.length-1];
// }

// export async function updateAuthorById(id, updates) {
//   // Query the database to update an author and return the newly updated author
//   const authors = await pool.query('UPDATE authors SET first_name = $1, last_name = $2 WHERE id = $3 RETURNING *', [updates.first_name, updates.last_name, id]);
//   return authors.rows[0];
// }

// export async function deleteAuthorById(id) {
//   // Query the database to delete an author and return the deleted author
//   const authors = await pool.query('DELETE FROM authors WHERE id = $1 RETURNING *', [id]);
//   return authors.rows[0];
// }