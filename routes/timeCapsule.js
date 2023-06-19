import express from "express";
import { timeCapsuleController } from "../controllers/timeCapsuleController.js";


 // set up routes for the time capsule
timeCapsuleRoutes.get("/", timeCapsuleController.getTimeCapsules);
timeCapsuleRoutes.post("/", timeCapsuleController.createTimeCapsule);
timeCapsuleRoutes.delete("/", timeCapsuleController.deleteTimeCapsule);
