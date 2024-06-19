const router = require('express').Router();
const adminControllers = require('../controllers/adminControllers');

router.get('/dashboard', adminControllers.viewDashboard);

//end-point category
router.get('/category', adminControllers.viewCategory);
router.post('/category', adminControllers.addCategory);
router.put('/category', adminControllers.editCategory);
router.delete('/category/:id', adminControllers.deleteCategory);

router.get('/bank', adminControllers.viewBank);
router.get('/item', adminControllers.viewItem);
router.get('/booking', adminControllers.viewBooking);


module.exports = router;