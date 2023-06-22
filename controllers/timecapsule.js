import * as timeCapsule from '../models/timeCapsule.js';

// we want to write a function that will get all the timecapsules from the database
// and then send them back to the client
export async function getTimeCapsules(req, res) {
const timeCapsules = await timeCapsule.getTimeCapsules();
res.json({ success: true, payload: timeCapsules });}



// we want a function that will create a new timecapsule
// and then send it back to the client
 export async function createTimeCapsule(req, res) {
    const data = req.body;
    const newTimeCapsule = await timeCapsule.createTimeCapsule(data);
    res.json({ success: true, payload: newTimeCapsule });}



// we want a function that will delete a timecapsule
// and then send it back to the client
export async function deleteTimeCapsuleById(req, res) {
    const timeCapsules = await timeCapsule.deleteTimeCapsuleById(req.params.id);
    res.json({ success: true, payload: timeCapsules });}


      