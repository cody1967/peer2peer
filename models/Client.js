const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Client extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Client.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
                
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
           }
        }
    },
    {
        hooks: {

            async beforeCreate(newClientData) {
                newClientData.password = await bcrypt.hash(newClientData.password, 10);
                    return newClientData
                },
                async beforeUpdate(updatedClientData) {
                  updatedClientData.password = await bcrypt.hash(updatedClientData.password, 10);
                  return updatedClientData;
              }
        
    },
    
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'client'
    }
);

module.exports = Client;