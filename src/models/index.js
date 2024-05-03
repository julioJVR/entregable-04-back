const EmailCode = require("./EmailCode");
const User = require("./User");

User.hasMany(EmailCode);
EmailCode.belongsTo(User);