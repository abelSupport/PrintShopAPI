var  config = require('../config/db.config.js');
var sql = require("mssql/msnodesqlv8")

module.exports = {


      // Get Item details by Id
 getItemById: async (req, res, next) => {
    // connect to your database
   await sql.connect(config, function (err) {
      if (err) console.log(err);
      // create Request object
      let request = new sql.Request();
      request.input("id", sql.NVarChar, req.body.Item_Id);
      console.log("id:"+req.body.Item_Id)
      // query to the database and get the records
       request.execute('spgetItemById', function (err, recordset) {
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

     // Get Item details by Id
 deleteItemById: async (req, res, next) => {
    // connect to your database
   await sql.connect(config, function (err) {
      if (err) console.log(err);
      // create Request object
      let request = new sql.Request();
      request.input("id", sql.NVarChar, req.body.Item_Id);
      console.log("id:"+req.body.Item_Id)
      // query to the database and get the records
       request.execute('spdeleteItemById', function (err, recordset) {
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

   // Update Item details by Id
 updateItemById: async (req, res, next) => {
    // connect to your database
   await sql.connect(config, function (err) {
      if (err) console.log(err);
      // create Request object
      let request = new sql.Request();
      request.input("id", sql.NVarChar, req.body.Item_Id);
      request.input("ItemName", sql.NVarChar, req.body.ItemName);
      request.input("Description", sql.NVarChar, req.body.Item_Desc);
      request.input("Price", sql.Int, req.body.Item_Price);
      request.input("ShopID", sql.Int, req.body.PrintShop_ID);
      console.log("id:"+req.body.Item_Id)
      // query to the database and get the records
       request.execute('spUpdateItemById', function (err, recordset) {
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

   

  // Add New Sellable Item 
 addItem: async (req, res, next) => {
    // connect to your database
   await sql.connect(config, function (err) {
      if (err) console.log(err);
      // create Request object
      let request = new sql.Request();
      request.input("id", sql.Int, req.body.Item_Id);
      request.input("ItemName", sql.NVarChar, req.body.ItemName);
      request.input("Description", sql.NVarChar, req.body.Item_Desc);
      request.input("Price", sql.Int, req.body.Item_Price);
      request.input("ShopID", sql.Int, req.body.PrintShop_ID);
       console.log("ShopID:"+req.body.PrintShop_ID)
      // query to the database and get the records
       request.execute('spAddSellableItem', function (err, recordset) {
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