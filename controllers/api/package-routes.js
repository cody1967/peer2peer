const router = require('express').Router();
const { Client, Driver, Package } = require('../../models');

router.get('/', (req, res) => {
    Package.findAll()
    .then(dbPackageData => res.json(dbPackageData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Package.create(req.body)
    .then(dbPackageData => res.json(dbPackageData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;