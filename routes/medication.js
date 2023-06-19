import express from "express";

medicationRoutes.get("/", medicationController.getMedications);
medicationRoutes.post("/", medicationController.createMedication);
medicationRoutes.delete("/", medicationController.deleteMedication);
