import { pool } from "../db/db.js";

export async function getEvent(userId) {
  // Query the database and return all authors
  const user_Id = userId;
  // Parameterized query to prevent SQL injection
  // This is why we pass the userId as a parameter to the query
  // and not just concatenate ($'') it into the query string
  // hence the userId as the second parameter to the query function outside query string
  // if we were to concatenate the userId in the query, the value would be interpreted as a string and printed which is not what we want as it is sensitive information
  const events = await pool.query("SELECT * FROM events WHERE user_id = $1", [
    user_Id,
  ]);
  console.log(events.rows);
  return events.rows;
}

getEvent(1);

export async function createEvents(event) {
  // Query the database to create a new event and return the newly created event
  const events = await pool.query(
    "INSERT INTO events (user_id, event_name, event_date, event_time) VALUES ($1, $2, $3, $4) RETURNING *",
    [event.user_id, event.event_name, event.event_date, event.event_time]
  );
  return events.rows;
}



// we want to create a function that will delete an event by its id
export async function deleteEventsById(eventsId) {
  // Query the database to delete an event and return the deleted event
  const events = await pool.query("DELETE FROM events WHERE event_id = $1 RETURNING *", [eventsId]);
  console.log(events.rows[0]);
  return events.rows[0];
}









