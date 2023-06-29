import { pool } from "../db/db.js";

// query data base to get/create and delete medication
// We need to decide if we are going to hardcore user ID rather than passing it in as a parameter
export async function getMedication(userId) {
  // Query the database and return all medication
  // join medication and medicationInfo table to get all medication info
  //   const user_Id = userId;
  const medications = await pool.query(
    "SELECT medication_name, scheduled_dosage, time_dosage FROM medicationInfo LEFT JOIN medication ON medicationInfo.medication_id = medication.medication_id WHERE user_id = 1"
  );
  // console.log("this is the get medication function", medications.rows);
  return medications.rows;
}
// getMedication(1);

// // When creating a new medication, we need to create a new medication and medicationInfo
// // Firstly, we want to create a new medicationID for the user
// // Then we want to create a new medicationInfo for medicationID that was just created
// // We want to return the newly created medicationInfo for that user (JOIN tables again)
export async function createMedication(medication) {
  const medicationName = medication.medication_name;
  const medicationDosage = medication.scheduled_dosage;
  const medicationTime = medication.time_dosage;
  const query1 = `INSERT INTO medication (user_id) VALUES ($1) RETURNING medication_id`;
  const data = await pool.query(query1, [1]);
  const medicationId = data.rows[0].medication_id;
  console.log(medicationId);
  const query2 =
    "INSERT INTO medicationinfo (medication_id, medication_name, scheduled_dosage, time_dosage) VALUES ($1, $2, $3, $4) RETURNING *";
  const data2 = await pool.query(query2, [
    medicationId,
    medicationName,
    medicationDosage,
    medicationTime,
  ]);

  console.log(`this is the createMedication function result`, data2.rows);
  return data2.rows;
}
// createMedication({
//   medication_name: "test",
//   scheduled_dosage: "test",
//   time_dosage: "08:00",
// });

// We want the user to be able to delete a medication by its medication_id
// we want to delete the medication id from medication info table and then that medication id from medication table
// We want to return the deleted medication
export async function deleteMedicationById(medicationId) {
    const query = "DELETE FROM medicationinfo WHERE medication_id = $1";
    const query2 = "DELETE FROM medication WHERE medication_id = $1 RETURNING *";
    const data = await pool.query(query, [medicationId]);
    const data2 = await pool.query(query2, [medicationId]);
    // console.log("this is the deleteMedicationById function", data.rows[0]);
    // return data.rows;
    }
// deleteMedicationById();

