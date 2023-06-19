import express from "express";

friendsAndFamilyRoutes.get("/", friendsAndFamilyController.getFriendsAndFamily);
friendsAndFamilyRoutes.post("/", friendsAndFamilyController.createFriendsAndFamily);
friendsAndFamilyRoutes.delete("/", friendsAndFamilyController.deleteFriendsAndFamily);
