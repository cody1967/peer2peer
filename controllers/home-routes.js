
const router = require('express').Router();
// const sequelize = require('../config/connection');
// const { Client, Driver, Package } = require('../../models');



router.get('/login', (req, res) => {
  res.render('login');
});

// router.get('/', (req, res) => {
//   res.json({
//       message: 'Hello People'
//   });
// });

module.exports = router;