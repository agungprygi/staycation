const router = require("express").Router();
const apiControllers = require("../controllers/apiControllers");
const {
  cloudinaryUpload,
  cloudinaryMultiUpload,
} = require("../middlewares/multer");

router.get("/landing-page", apiControllers.landingPage);
router.get("/detail-page/:id", apiControllers.detailPage);
router.post("/booking-page", cloudinaryUpload, apiControllers.bookingPage);

module.exports = router;
