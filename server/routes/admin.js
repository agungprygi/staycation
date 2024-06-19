const router = require('express').Router();
const adminControllers = require('../controllers/adminControllers');

router.get('/dashboard', adminControllers.viewDashboard);

module.exports = router;