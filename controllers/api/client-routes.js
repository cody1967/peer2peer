const router = require('express').Router();
const { Client } = require('../../models');

router.get('/', (req, res) => {
    Client.findAll()
    .then(dbClientData => res.json(dbClientData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Client.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbClientData => res.json(dbClientData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});





module.exports = router;