const router = require('express').Router();
const adminControllers = require('../controllers/adminControllers');
const { upload, uploadMultiple, cloudinaryUpload } = require('../middlewares/multer');

router.get('/dashboard', adminControllers.viewDashboard);

//end-point category
router.get('/category', adminControllers.viewCategory);
router.post('/category', adminControllers.addCategory);
router.put('/category', adminControllers.editCategory);
router.delete('/category/:id', adminControllers.deleteCategory);

//end-point bank
router.get('/bank', adminControllers.viewBank);
router.post('/bank', cloudinaryUpload, adminControllers.addBank);
router.put('/bank', cloudinaryUpload, adminControllers.editBank);
router.delete('/bank/:id', adminControllers.deleteBank);

router.get('/item', adminControllers.viewItem);
router.get('/booking', adminControllers.viewBooking);


module.exports = router;