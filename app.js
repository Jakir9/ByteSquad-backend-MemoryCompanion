import express from "express";
import dotenv  from "dotenv";

// Import predefined routes (HTTP Requests)
// import { timeCapsuleRoutes } from "./routes/timeCapsuleRoutes.js";
// import { friendsAndFamilyRoutes } from "./routes/friendsAndFamilyRoutes.js";
// import { medicationRoutes } from "./routes/medicationRoutes.js";
// import { eventsRoutes } from "./routes/eventsRoutes.js";

// This is uber important, nary forget! 
dotenv.config()

const app = express();
const PORT = process.env.PORT;

console.log(PORT);

// Need to hook up the backend and frontend to the same port
// * INSERT HERE *

// Automatic parsing of objects/data
app.use(express.json());

// User request comes in with the following URI and then is routed to the correct route file (based off this original info), where the additional route paths are reviewed
app.use("/", (req, res) => {
  res.send("Hello World!");
});

// app.use("/timecapsule", timeCapsuleRoutes);
// app.use("/friendsandfamily", friendsAndFamilyRoutes);
// app.use("/medication", medicationRoutes);
// app.use("/events", eventsRoutes);

app.listen(PORT, function () {
  console.log(`Server listening on port http://localhost:${PORT}`);

});
