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

// get single package by id
router.get('/:id', (req, res) => {
    Package.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbPackageData => {
        if (!dbPackageData) {
            res.status(404).json({message: 'No package package with this id'});
            return;
        }
        res.json(dbPackageData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});  

// create a package
router.post('/', (req, res) => {
    Package.create(req.body)
    .then(dbPackageData => res.json(dbPackageData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update package info
router.put('/:id', (req, res) => {
    Package.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbPackageData => {
        if (!dbPackageData[0]) {
            res.status(404).json({ message: 'No package found with this id' });
            return;
        }
        res.json(dbPackageData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    }); 
});

// delete a package
router.delete('/:id', (req, res) => {
    Package.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPackageData => {
        if (!dbPackageData) {
            res.status(404).json({ message: 'No package found with this id' });
            return;
        }
        res.json(dbPackageData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;