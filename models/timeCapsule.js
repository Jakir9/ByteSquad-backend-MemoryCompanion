import { pool } from '../db/db.js'

// query data base to get/create and delete medication
// We need to decide if we are going to hardcore user ID rather than passing it in as a parameter
export async function getTimeCapsule(userId) {
  // Query the database and return all medication
  // join medication and medicationInfo table to get all medication info
  //   const user_Id = userId;
  const query = await pool.query(
    'SELECT image, timecapsule_id FROM timecapsule WHERE user_id = 1'
  )
  console.log('this is the get medication function', query.rows)
  return query.rows
}

getTimeCapsule(1)

export async function createTimeCapsule(timeCapsule) {
  // Query the database to create a new event and return the newly created event
  const query = await pool.query(
    'INSERT INTO timecapsule (user_id, image) VALUES ($1, $2) RETURNING *',
    [timeCapsule.user_id, timeCapsule.image]
  )
  return query.rows
}

createTimeCapsule({
  user_id: 3,
  image:
    'https://cdnb.artstation.com/p/assets/images/images/058/552/303/large/neonz_art-asset.jpg?1674442260',
})

//   console.log(`this is the createMedication function result`, data2.rows)
//   return data2.rows
// }
// // createMedication({
// //   medication_name: "test",
// //   scheduled_dosage: "test",
// //   time_dosage: "08:00",
// // });

// // We want the user to be able to delete a medication by its medication_id
// // we want to delete the medication id from medication info table and then that medication id from medication table
// // We want to return the deleted medication
// export async function deleteMedicationById(medicationId) {
//   const query = 'DELETE FROM medicationinfo WHERE medication_id = $1'
//   const query2 = 'DELETE FROM medication WHERE medication_id = $1 RETURNING *'
//   const data = await pool.query(query, [medicationId])
//   const data2 = await pool.query(query2, [medicationId])
//   // console.log("this is the deleteMedicationById function", data.rows[0]);
//   // return data.rows;
// }
// // deleteMedicationById();
