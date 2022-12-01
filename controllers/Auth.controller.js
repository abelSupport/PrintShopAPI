/*-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
# Name       : auth.Controller.js
# Description: 
# Created By : Rucha
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------*/

var config = require("../config/db.config.js");
var sql = require("mssql/msnodesqlv8");

module.exports = {
  // Get Login user's details

  getLogin: async (req, res, next) => {
    
    // console.log("You are in Auth Controller " + req.query);

    console.log("email:" + req.query.email);
    console.log("password:" + req.query.password);

    // connect to your database
    await sql.connect(config, function (err) {
      if (err) console.log(err);
      // create Request object
      let request = new sql.Request();

      request.input("email", sql.NVarChar, req.query.email);
      request.input("password", sql.NVarChar, req.query.password);

      // check the inputs


      // query to the database and get the records
      request.execute("spGetLogin", function (err, recordset) {
        if (err) console.log(err);
        // send records as a response
        res.status(200).json({
          status: 200,
          message: !recordset ? "No data available" : "Success",
          data: recordset ? recordset.recordset : recordset,
        });
        console.log("Result: " + recordset )
      });
    });
  },
};
