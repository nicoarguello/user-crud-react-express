require('dotenv').config(); // inicializa las variables de entorno
const {Sequelize, DataTypes, Model} = require('sequelize');

const {DB_USER , DB_PASSWORD, DB_HOST, DB_NAME} = process.env

const db = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{
    logging: false,
    native: false
}) // Example for postgres


const User = db.define('User', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    passWord: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {});

class Position extends Model {}

Position.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db, // We need to pass the connection instance
    modelName: 'Position' // We need to choose the model name
});

// relations

User.belongsTo(Position, {as:'Position'});
Position.hasMany(User,{as:'Position'});

module.exports = {
    User,
    Position,
    db
}
