const router = require('express').Router();
const adminControllers = require('../controllers/adminControllers');
const { cloudinaryUpload, cloudinaryMultiUpload } = require('../middlewares/multer');
const auth = require('../middlewares/auth')

router.get('/signin', adminControllers.viewSignIn);
router.post('/signin', adminControllers.actionSignin);
router.use(auth);
router.get('/logout', adminControllers.actionLogout);
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

//end-point activity
router.post('/item/add-activity', cloudinaryUpload,adminControllers.addActivity);
router.put('/item/edit/activity', cloudinaryUpload,adminControllers.editActivity);
router.delete('/item/:itemId/delete-activity/:id', adminControllers.deleteActivity);

//end-point booking
router.get('/booking', adminControllers.viewBooking);
router.get('/booking/:id', adminControllers.viewDetailBooking);
router.put('/booking/:id/confirm', adminControllers.actionConfirmation);
router.put('/booking/:id/reject', adminControllers.actionReject);


module.exports = router;