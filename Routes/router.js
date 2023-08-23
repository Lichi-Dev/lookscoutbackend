const express = require("express");
const router = express.Router();
const textController = require("../Controllers/textController");
const ImageController = require("../Controllers/imageController");
const upload = require("../multerconfig/storageConfig");

router.put("/updateText", textController.updateText);
router.get("/getText", textController.getText);
router.put("/updateImage", upload.single("image"), ImageController.updateImage);
router.get("/getImage", ImageController.getImage);

module.exports = router;
