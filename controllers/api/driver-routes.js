const router = require('express').Router();
const { Client, Driver, Package } = require('../../models');

router.get('/', (req, res) => {
    Driver.findAll()
    .then(dbDriverData => res.json(dbDriverData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Driver.create(req.body)
    .then(dbClientData => res.json(dbClientData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;