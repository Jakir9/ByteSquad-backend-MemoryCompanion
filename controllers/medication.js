// import * as medication from '../models/medication';

// we want to create a function that will get all the medications from the database
// and then send them back to the client
export async function getMedications(req, res) {
    const medications = await medication.getMedications();
    res.json({ success: true, payload: medications });
}

// we want a function that will create a new medication
export async function createMedication(req, res) {
    const data = req.body;
    const newMedication = await medication.createMedication(data);
    res.json({ success: true, payload: newMedication });
}

// we want a function that will delete a medication
export async function deleteMedicationById(req, res) {
    const medication = await medication.deleteMedicationById(req.params.id);
    res.json({ success: true, payload: medication });
}
