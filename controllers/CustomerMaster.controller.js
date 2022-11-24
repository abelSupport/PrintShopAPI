var  config = require('../config/db.config.js');
var sql = require("mssql/msnodesqlv8")

module.exports = {

    // Get Customer details by Id
 getCustomerById: async (req, res, next) => {
    // connect to your database
   await sql.connect(config, function (err) {
      if (err) console.log(err);
      // create Request object
      let request = new sql.Request();
      request.input("id", sql.NVarChar, req.body.Cust_Id);
      console.log("id:"+req.body.Cust_Id)
      // query to the database and get the records
       request.execute('spgetCustomerById', function (err, recordset) {
        if (err) console.log(err)
        // send records as a response
        res.status(200).json({
          status: 200,
          message: !recordset ? "No data available" : "Success",
          data: recordset ? recordset.recordset : recordset
        });
      });
    });


  },

  // Add Customer details 
 addCustomer: async (req, res, next) => {
    // connect to your database
   await sql.connect(config, function (err) {
      if (err) console.log(err);
      // create Request object
      let request = new sql.Request();
      request.input("id", sql.Int, req.body.Cust_Id);
      request.input("cust_name", sql.NVarChar, req.body.Cust_Name);
      request.input("cust_address", sql.NVarChar, req.body.Cust_Address);
      request.input("mobile", sql.Int, req.body.Cust_Mobile_No);
      request.input("email", sql.NVarChar, req.body.Cust_Email);
      console.log("id:"+req.body.Cust_Id)
      // query to the database and get the records
       request.execute('spAddCustomer', function (err, recordset) {
        if (err) console.log(err)
        // send records as a response
        res.status(200).json({
          status: 200,
          message: !recordset ? "No data available" : "Success",
          data: recordset ? recordset.recordset : recordset
        });
      });
    });


  },
}