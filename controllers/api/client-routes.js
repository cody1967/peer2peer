const router = require('express').Router();
const { Client, Driver, Package } = require('../../models');

// get all clients
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

// get single client by id
router.get('/:id', (req, res) => {
    Client.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Driver,
                attributes: ['first_name', 'last_name', 'email', 'cell_number'],
                through: Package,
                as: 'assigned_driver'
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

// create a client
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

// update client info
router.put('/:id', (req, res) => {
    Client.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbClientData => {
        if (!dbClientData[0]) {
            res.status(404).json({ message: 'No client found with this id' });
            return;
        }
        res.json(dbClientData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    }); 
});

// delete a client
router.delete('/:id', (req, res) => {
    Client.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbClientData => {
        if (!dbClientData) {
            res.status(404).json({ message: 'No client found with this id' });
            return;
        }
        res.json(dbClientData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;