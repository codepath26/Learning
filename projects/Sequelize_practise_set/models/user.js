const { DataTypes } = require("sequelize");
const sequelize = require('../database.js');
const User = sequelize.define('user' , {
  username : {
    type : DataTypes.STRING,
    allowNull : false,
  },
  email : {
    type : DataTypes.STRING,
    allowNull : false,
  },
},{
    // don't forget to enable timestamps!
    timestamps: true,

    // I don't want createdAt
    createdAt: false,
  
    // I want updatedAt to actually be called updateTimestamp
    updatedAt: 'updateTimestamp'
});

module.exports = User;