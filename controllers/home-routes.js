
const router = require('express').Router();
// const sequelize = require('../config/connection');
// const { Client, Driver, Package } = require('../../models');


router.get('/homepage', (req, res) => {
  res.render('homepage');
});

router.get('/clients', (req, res) => {
  res.render('client');
});

router.get('/packages', (req, res) => {
  res.render('order');
});

router.get('/drivers', (req, res) => {
  res.render('driver');
});

router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('login');
});

router.get('/', (req, res) => {
  console.log(req.session);
});

module.exports = router;