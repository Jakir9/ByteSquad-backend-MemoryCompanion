import express from "express";
import * as timeCapsuleController  from "../controllers/timeCapsule.js";
export const timeCapsuleRoutes = express.Router();


 // set up routes for the time capsule
timeCapsuleRoutes.get("/", timeCapsuleController.getTimeCapsules);
timeCapsuleRoutes.post("/", timeCapsuleController.createTimeCapsule);
timeCapsuleRoutes.delete("/:id", timeCapsuleController.deleteTimeCapsuleById);
