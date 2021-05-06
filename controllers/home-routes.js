
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Client, Driver, Package } = require('../models');


router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/clients/:id', (req, res) => {
  Client.findOne({
      attributes: { exclude: ['password'] },
      where: {
          id: req.session.user_id
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
              res.status(404).json({ message: 'No client found with this id' });
              return;
          }
          const client = dbClientData.get({ plain: true });

          res.render('client', {
            client,
            loggedIn: req.session.loggedIn
          });
        })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.get('/packages', (req, res) => {
    res.render('order', {
      loggedIn: req.session.loggedIn
    });
});

router.get('/drivers', (req, res) => {
  res.render('driver');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/packages');
    
  }
  res.render('login');
  return;
});

router.get('/', (req, res) => {
  console.log(req.session);
});

module.exports = router;