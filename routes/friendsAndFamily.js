import express from "express";
import * as friendsAndFamilyController  from "../controllers/friendsAndFamily.js";
export const friendsAndFamilyRoutes = express.Router();

friendsAndFamilyRoutes.get("/", friendsAndFamilyController.getFriendsAndFamily);
friendsAndFamilyRoutes.post("/", friendsAndFamilyController.createFriendsAndFamily);
friendsAndFamilyRoutes.delete("/:id", friendsAndFamilyController.deleteFriendsAndFamilyById);
