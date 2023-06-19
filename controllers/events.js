// import * as events from '../models/events';

// we want to write a function that will get all the events from the database
// and then send them back to the client
export async function getEvents(req, res) {
    const events = await events.getEvents();
    res.json({ success: true, payload: events });
}

// we want a function that will create a new events
export async function createEvents(req, res) {
    const data = req.body;
    const newEvents = await events.createEvents(data);
    res.json({ success: true, payload: newEvents });
}

// we want a function that will delete a events
export async function deleteEventsById(req, res) {
    const events = await events.deleteEventsById(req.params.id);
    res.json({ success: true, payload: events });
}
