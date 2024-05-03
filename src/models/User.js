const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const User = sequelize.define('user', {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.TEXT, allowNull: false },
    isVerified: { type: DataTypes.BOOLEAN, defaultValue: false },
}, { underscored: true });

User.prototype.toJSON = function () {
   const values = { ...this.get() };
   delete values.password ;
   return values;
};

module.exports = User;