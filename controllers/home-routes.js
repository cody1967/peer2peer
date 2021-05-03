
const router = require('express').Router();
// const sequelize = require('../config/connection');
// const { Client, Driver, Package } = require('../../models');


router.get('/homepage', (req, res) => {
  res.render('homepage');
});

router.get('/client', (req, res) => {
  res.render('client');
});

router.get('/order', (req, res) => {
  res.render('order');
});

router.get('/driver', (req, res) => {
  res.render('driver');
});

router.get('/login', (req, res) => {
  res.render('login');
});

// router.get('/', (req, res) => {
//   res.json({
//       message: 'Hello People'
//   });
// });

module.exports = router;