const router = require('express').Router();
const adminControllers = require('../controllers/adminControllers');

router.get('/dashboard', adminControllers.viewDashboard);
router.get('/category', adminControllers.viewCategory);
router.get('/bank', adminControllers.viewBank);
router.get('/item', adminControllers.viewItem);
router.get('/booking', adminControllers.viewBooking);

module.exports = router;