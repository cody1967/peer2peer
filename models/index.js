const Client = require('./Client');
const Driver = require('./Driver');
const Package = require('./Package');

Client.hasMany(Package, {
    foreignKey: 'client_id'
});

Package.belongsTo(Client, {
    foreignKey: 'client_id'
});

Driver.hasMany(Package, {
    foreignKey: 'driver_id'
});

Package.belongsTo(Driver, {
    foreignKey: 'driver_id'
});

Client.hasMany(Driver, {
    through: Package,
    as: 'assigned_driver',
    foreignKey: 'client_id'
});

Driver.hasMany(Client, {
    through: Package,
    as: 'assigned_client',
    foreignKey: 'driver_id'
});


module.exports = { Client, Driver, Package };