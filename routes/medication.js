import express from "express";
import * as medicationController  from "../controllers/medication.js";
export const medicationRoutes = express.Router();


medicationRoutes.get("/", medicationController.getMedication);
medicationRoutes.post("/", medicationController.createMedication);
medicationRoutes.delete("/:id", medicationController.deleteMedicationById);
