import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";

var router = express.Router();

const PORT = process.env.PORT;

if (!fs.existsSync("uploads/")) {
  fs.mkdirSync("uploads/");
}

// multer. can be changed to match whatever storage type we need
// Its good practice to test locally before uploading to cloud storage like AWS S3
  // Why? If you have a problem like a loop - you will constantly be uploading to the cloud and could be unknowlingly charged for it
  // If you test locally, you can catch these errors before uploading to the cloud
// multer.diskStorage() creates a storage space on the disk
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const name = file.fieldname + "-" + Date.now();
    cb(null, name + ext);
  },
});

const upload = multer({ storage });

/* POST upload file. */
router.post("/", upload.single("file"), (req, res) => {
  if (req.file) {
    // File upload was successful
    res.json({
      success: true,
      payload: `http://localhost:${PORT}/uploads/${req.file.filename}`,
    });
  } else {
    // No file was uploaded or an error occurred
    if (req.fileValidationError) {
      // Invalid file type
      res.status(400).send("Invalid file type!");
    } else if (req.fileSizeError) {
      // File is too large
      res.status(400).send("File is too large!");
    } else {
      // Other error occurred
      res.status(500).send("File upload error!");
    }
  }
});

export default router;