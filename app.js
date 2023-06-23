import dotenv  from "dotenv";

// Import predefined routes (HTTP Requests)
// import { timeCapsuleRoutes } from "./routes/timeCapsuleRoutes.js";
// import { friendsAndFamilyRoutes } from "./routes/friendsAndFamilyRoutes.js";
// import { medicationRoutes } from "./routes/medication.js";
// import { eventsRoutes } from "./routes/events.js";

// repair imports  - Commented out just to stop errors

// For file upload - Darren
import express from "express";
import uploadRouter from "./routes/upload.js";
import cors from "cors";

const app = express()

app.use(cors());
app.use("/upload", uploadRouter);
app.use("/uploads", express.static("uploads"));

// This is uber important, nary forget! 
dotenv.config()

const PORT = process.env.PORT;

console.log(PORT);

// Need to hook up the backend and frontend to the same port
// * INSERT HERE *

// Automatic parsing of objects/data
app.use(express.json());

// User request comes in with the following URI and then is routed to the correct route file (based off this original info), where the additional route paths are reviewed
// app.use("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.use("/timecapsule", timeCapsuleRoutes);
// app.use("/friendsandfamily", friendsAndFamilyRoutes);
// app.use("/api/medication", medicationRoutes);
// app.use("/api/events", eventsRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);

});

export default app;