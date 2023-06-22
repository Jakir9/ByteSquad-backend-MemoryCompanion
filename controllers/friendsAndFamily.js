import * as friendsAndFamily from '../models/friendsAndFamily.js';

// we want to write a function that will get all the friendsAndFamily from the database
// and then send them back to the client
export async function getFriendsAndFamily(req, res) {
    const friendsAndFamily = await friendsAndFamily.getFriendsAndFamily();
    res.json({ success: true, payload: friendsAndFamily });
}

// we want a function that will create a new friendsAndFamily
export async function createFriendsAndFamily(req, res) {
    const data = req.body;
    const newFriendsAndFamily = await friendsAndFamily.createFriendsAndFamily(data);
    res.json({ success: true, payload: newFriendsAndFamily });
}


// we want a function that will delete a friendsAndFamily
export async function deleteFriendsAndFamilyById(req, res) {
    const deletedFriendsAndFamily = await friendsAndFamily.deleteFriendsAndFamilyById(req.params.id);
    res.json({ success: true, payload: deletedFriendsAndFamily });
}
