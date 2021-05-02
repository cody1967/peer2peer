const router = require('express').Router();
const { Client, Driver, Package } = require('../../models');

router.get('/', (req, res) => {
    Client.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbClientData => res.json(dbClientData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Client.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Driver,
                attributes: ['first_name', 'last_name'],
                through: Package,
                as: 'assigned_drivers'
            }
        ]
    })
    .then(dbClientData => {
        if (!dbClientData) {
            res.status(404).json({message: 'No client found with this id'});
            return;
        }
        res.json(dbClientData);
    })
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