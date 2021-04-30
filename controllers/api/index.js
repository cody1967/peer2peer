const router = require('express').Router();

const clientRoutes = require('./client-routes');

router.use('/clients', clientRoutes);

module.exports = router;