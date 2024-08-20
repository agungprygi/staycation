const router = require('express').Router();
const adminControllers = require('../controllers/adminControllers');
const { cloudinaryUpload, cloudinaryMultiUpload } = require('../middlewares/multer');

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

//end-point item
router.get('/item', adminControllers.viewItem);
router.post('/item', cloudinaryMultiUpload, adminControllers.addItem);
router.get('/item/show-image/:id', adminControllers.showImageItem);
router.get('/item/edit/:id', adminControllers.showEditItem);
router.put('/item/:id', cloudinaryMultiUpload, adminControllers.editItem);
router.delete('/item/:id', adminControllers.deleteItem);

//end-point detail item
router.get('/item/show-detail-item/:itemId', adminControllers.viewDetailItem);
router.post('/item/add-feature', cloudinaryUpload,adminControllers.addFeature);
router.put('/item/edit/feature', cloudinaryUpload,adminControllers.editFeature);
router.delete('/item/:itemId/delete-feature/:id', adminControllers.deleteFeature);

//end-point booking
router.get('/booking', adminControllers.viewBooking);


module.exports = router;