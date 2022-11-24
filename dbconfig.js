

var sql = require("mssql/msnodesqlv8")
require("msnodesqlv8");

const  config = {
   user:  'sa', // sql user
    password: 'sa123', //sql user password
    server:  'DESKTOP-9BAE76R', // if it does not work try- localhost
    //server:'localhost',
    database:  'Print_Shop',
    driver: "msnodesqlv8",
    options: {
      trustedconnection:  true,
    ///  enableArithAbort:  true,
     // instancename:  'SQLEXPRESS'  // SQL Server instance name
    },
    port:  1433
  }
  
  module.exports = config;