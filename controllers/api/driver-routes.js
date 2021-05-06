const router = require('express').Router();
const { Client, Driver, Package } = require('../../models');

// all drivers
router.get('/', (req, res) => {
    Driver.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbDriverData => res.json(dbDriverData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get single driver by id
router.get('/:id', (req, res) => {
    Driver.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Client,
                attributes: ['first_name', 'last_name', 'email'],
                through: Package,
                as: 'assigned_client'
            }
        ]
    })
    .then(dbDriverData => {
        if (!dbDriverData) {
            res.status(404).json({message: 'No driver found with this id'});
            return;
        }
        res.json(dbDriverData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
}); 

router.post('/', (req, res) => {
    Driver.create(req.body)
    .then(dbDriverData => res.json(dbDriverData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update driver info
router.put('/:id', (req, res) => {
    Driver.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbDriverData => {
        if (!dbDriverData[0]) {
            res.status(404).json({ message: 'No driver found with this id' });
            return;
        }
        res.json(dbDriverData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    }); 
});

// delete a driver
router.delete('/:id', (req, res) => {
    Driver.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbDriverData => {
        if (!dbDriverData) {
            res.status(404).json({ message: 'No driver found with this id' });
            return;
        }
        res.json(dbDriverData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;