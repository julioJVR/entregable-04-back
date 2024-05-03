const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const EmailCode = sequelize.define('email_code', {
    code: { type: DataTypes.STRING, allowNull: false },
}, { underscored: true });

module.exports = EmailCode;