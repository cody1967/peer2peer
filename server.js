const express = require('express');
const exphbs = require('express-handlebars')
const routes = require('./controllers');
const sequelize = require('./config/connection.js');
const exphbs = require('express-handlebars');
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));


app.use(routes);

app.use(session(sess));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening' + PORT));
    app.listen(PORT, () => console.log('Now listening', PORT));
  });

  const cookieStorage = {
    getItem: (key) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('+'))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[key]
    },
    setItem: (key, value) => {
        document.cookie = '${key}=${value}'
    },
}

const storageType = cookieStorage;
const consentPropertyName = 'jdc_consent';

const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
    const consentPopup = document.getElementById('consent-popup');
    const acceptBtn = document.getElementById('accept');

    const acceptFn = event => {
        saveToStorage(storageType)
        consentPopup.classList.add('hidden');
    };

    acceptBtn.addEventListener('click', acceptFn);


    if (shouldShowPopup(storageType)) {
        setTimeout(() => {
            consentPopup.classList.remove('hidden');
       }, 2000);
    }
};

