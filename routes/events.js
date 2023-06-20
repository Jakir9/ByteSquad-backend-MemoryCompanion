import express from "express";
import * as eventsControllers  from "../controllers/events.js";
export const eventsRoutes = express.Router();


eventsRoutes.get("/", eventsControllers.getEvents);
eventsRoutes.post("/", eventsControllers.createEvents);
// eventsRoutes.delete("/", eventsControllers.deleteEvents);
