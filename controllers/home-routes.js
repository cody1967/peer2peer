
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Client, Driver, Package } = require('../models');


router.get('/', (req, res) => {
  if(req.session.loggedIn){
    Client.findOne({
      attributes: { include: ['id', 'first_name', 'last_name'] },
      where: {
        id: req.session.user_id
      }
    })
    .then(dbClientData => {
      const client = dbClientData.get({ plain: true });
  
      res.render('homepage',{
        client,
        loggedIn: req.session.loggedIn
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  } else {
    res.render('homepage')
  }
});


router.get('/clients/:id', (req, res) => {
  Client.findOne({
      attributes: { exclude: ['password'] },
      where: {
          id: req.session.user_id
      },
      include: [
          {
              model: Package
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
  Client.findOne({
    attributes: { include: ['id', 'first_name', 'last_name'] },
    where: {
      id: req.session.user_id
    }
  })
  .then(dbClientData => {
    const client = dbClientData.get({ plain: true });

    res.render('order',{
      client,
      loggedIn: req.session.loggedIn
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


router.get('/drivers', (req, res) => {
  res.render('driver');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/packages');
    return;
  }
  res.render('login');
});

module.exports = router;