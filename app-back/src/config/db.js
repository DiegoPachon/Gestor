const { Sequelize } = require("sequelize");
const envVars = require("./envVars");

const connection = new Sequelize(
  envVars.DB_NAME,
  envVars.USER_DB,
  envVars.PASS_DB,
  {
    host: envVars.HOST_DB,
    port: envVars.PORT_DB,
    dialect: "postgres",
     //ssl: true,
     //dialectOptions: {
      //ssl: {
       //require: true,diegopachon1@hotmail.com
       //rejectUnauthorized: false, cji8sa0d
     //},
    // },
  }
);

module.exports = {
  connection,
};
