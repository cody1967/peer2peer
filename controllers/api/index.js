const router = require('express').Router();

const clientRoutes = require('./client-routes');
const driverRoutes = require('./driver-routes');
const packageRoutes = require('./package-routes');

router.use('/clients', clientRoutes);
router.use('/drivers', driverRoutes);
router.use('/packages', packageRoutes);

module.exports = router;