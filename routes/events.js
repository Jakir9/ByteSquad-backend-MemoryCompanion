import express from "express";

eventsRoutes.get("/", eventsController.getEvents);
eventsRoutes.post("/", eventsController.createEvents);
eventsRoutes.delete("/", eventsController.deleteEvents);
