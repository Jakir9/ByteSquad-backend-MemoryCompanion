import { pool } from "../db/db.js";



// write a function that will get information from friendsandfamilyinfo table by joining with friendsandfamily table
export async function getFriendsAndFamily(userId) {
    const friendsAndFamily = await pool.query( "SELECT fnf_name, fnf_relationship, fnf_age, fnf_dob, fnf_photo FROM friendsandfamilyinfo LEFT JOIN friendsandfamily ON friendsandfamilyinfo.fnf_id = friendsandfamily.fnf_id WHERE user_id = 1");
    console.log("this is the get friends and family function", friendsAndFamily.rows);
    return friendsAndFamily.rows;
    }
    getFriendsAndFamily(1);

// write a function that will create a new friendsandfamily and insert new id into friendsandfamily table and  then further information into friendsandfamilyinfo table

export async function createFriendsAndFamily(friendsAndFamily) { 
    const fnfName = friendsAndFamily.fnf_name;
    const fnfRelationship = friendsAndFamily.fnf_relationship;
    const fnfAge = friendsAndFamily.fnf_age;
    const fnfDob = friendsAndFamily.fnf_dob;
    const fnfPhoto = friendsAndFamily.fnf_photo;
    const query1 = `INSERT INTO friendsandfamily (user_id) VALUES ($1) RETURNING fnf_id`;
    const data = await pool.query(query1, [1]);
    const fnfId = data.rows[0].fnf_id;
    console.log(fnfId);
    const query2 = "INSERT INTO friendsandfamilyinfo (fnf_id, fnf_name, fnf_relationship, fnf_age, fnf_dob, fnf_photo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
    const data2= await pool.query(query2, [fnfId, fnfName, fnfRelationship, fnfAge, fnfDob, fnfPhoto]);
    console.log(data2.rows[0]);
    return data2.rows;
    }

createFriendsAndFamily({fnf_name: "test", fnf_relationship: "test", fnf_age: 5, fnf_dob: "2000-01-01", fnf_photo: "test"});




// export async function getMedication(userId) {
//     // Query the database and return all medication
//     // join medication and medicationInfo table to get all medication info
//     //   const user_Id = userId;
//     const medications = await pool.query(
//       "SELECT medication_name, scheduled_dosage, time_dosage FROM medicationInfo LEFT JOIN medication ON medicationInfo.medication_id = medication.medication_id WHERE user_id = 1"
//     );
//     console.log("this is the get medication function", medications.rows);
//     return medications.rows;
//   }
//   getMedication(1);


// export async function createMedication(medication) {
//     const medicationName = medication.medication_name;
//     const medicationDosage = medication.scheduled_dosage;
//     const medicationTime = medication.time_dosage;
//     const query1 = `INSERT INTO medication (user_id) VALUES ($1) RETURNING medication_id`;
//     const data = await pool.query(query1, [1]);
//     const medicationId = data.rows[0].medication_id;
//     console.log(medicationId);
//     const query2 =
//       "INSERT INTO medicationinfo (medication_id, medication_name, scheduled_dosage, time_dosage) VALUES ($1, $2, $3, $4) RETURNING *";
//     const data2 = await pool.query(query2, [
//       medicationId,
//       medicationName,
//       medicationDosage,
//       medicationTime,
//     ]);
  
//     console.log(`this is the createMedication function result`, data2.rows);
//     return data2.rows;
//   }
//   // createMedication({
//   //   medication_name: "test",
//   //   scheduled_dosage: "test",
//   //   time_dosage: "08:00",
//   // });
  



// export async function deleteMedicationById(medicationId) {
//     const query = "DELETE FROM medicationinfo WHERE medication_id = $1";
//     const query2 = "DELETE FROM medication WHERE medication_id = $1 RETURNING *";
//     const data = await pool.query(query, [medicationId]);
//     const data2 = await pool.query(query2, [medicationId]);
//     // console.log("this is the deleteMedicationById function", data.rows[0]);
//     // return data.rows;
//     }
// // deleteMedicationById();