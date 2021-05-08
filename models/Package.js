const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Package extends Model {}

Package.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        item: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pick_up_state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pick_up_city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pick_up_street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pick_up_zip: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        drop_off_state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        drop_off_city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        drop_off_street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        drop_off_zip: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        // deliver_by: {
        //     type: DataTypes.DATEONLY,
        //     allowNull: true,
        //     validate: {
        //         isDate: true
        //     }
        // },
        driver_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'driver',
                key: 'id'
            }
        },
        client_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'client',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: true,
        underscored: true,
        modelName: 'package'
    }
);

module.exports = Package;