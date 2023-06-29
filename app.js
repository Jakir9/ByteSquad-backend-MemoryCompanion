import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'


// local storage upload 
import uploadRouter from './routes/upload.js'

// Import predefined routes (HTTP Requests)
import { timeCapsuleRoutes } from "./routes/timeCapsule.js";
import { friendsAndFamilyRoutes } from "./routes/friendsAndFamily.js";
import { medicationRoutes } from "./routes/medication.js";
import { eventsRoutes } from "./routes/events.js";

// This is uber important, nary forget!
dotenv.config();

const app = express()
const PORT = process.env.PORT

// var AuthenticationClient = require('auth0').AuthenticationClient

// var auth0 = new AuthenticationClient({
//   domain: '{YOUR_ACCOUNT}.auth0.com',
//   clientId: '{OPTIONAL_CLIENT_ID}',
// })

console.log(PORT);

// Need to hook up the backend and frontend to the same port
// * INSERT HERE *

// Automatic parsing of objects/data

app.use(express.json())
app.use(cors())

// local storage command
app.use("/upload", uploadRouter)
app.use("/uploads", express.static("uploads"))

// User request comes in with the following URI and then is routed to the correct route file (based off this original info), where the additional route paths are reviewed
// app.use("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use('/api/timecapsule', timeCapsuleRoutes)
app.use('/api/friendsandfamily', friendsAndFamilyRoutes)
app.use('/api/medication', medicationRoutes)
app.use('/api/events', eventsRoutes)

// POST endpoint to handle the request from Auth0
app.post('/api', (req, res) => {
  // Extract the user_id from the request body
  const { user_id } = req.body

  // Do something with the user_id
  console.log(user_id)

  // Send a response back to Auth0 if needed
  res.send('Received user_id successfully')
})

app.listen(PORT, function () {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
 export default app