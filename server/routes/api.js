const router = require('express').Router();
const apiControllers = require('../controllers/apiControllers');
const { cloudinaryUpload, cloudinaryMultiUpload } = require('../middlewares/multer');

router.get('/landing-page', apiControllers.landingPage);

module.exports = router;