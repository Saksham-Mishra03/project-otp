const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) =>{
    const loginData = sequelize.define("loginData",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true
        },
        email:{
            type:DataTypes.STRING,
        },
        password:{
            type:DataTypes.STRING
        }
    })
    return loginData;
}