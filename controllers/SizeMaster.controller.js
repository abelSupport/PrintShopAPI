var  config = require('../config/db.config.js');
var sql = require("mssql/msnodesqlv8")

module.exports = {

    getSizeMaster: async (req, res, next) => {
        // connect to your database
       await sql.connect(config, function (err) {
          if (err) console.log(err);
          // create Request object
          let request = new sql.Request();
           //console.log(req.body.username)
          // query to the database and get the records
          
           request.execute('spSelectSizeMaster', function (err, recordset) {
            if (err) console.log(err)
            // send records as a response
            res.status(200).json({
              status: 200,
              message: !recordset ? "No data available" : "Success",
              data: recordset ? recordset.recordset : recordset
            });
          });
        });

}
}