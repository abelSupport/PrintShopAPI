var  config = require('./dbconfig');
var sql = require("mssql/msnodesqlv8")
//const  sql = require('mssql');

async  function  getLogins() {
    try {
      let  pool = await  sql.connect(config);
      let  products = await  pool.request().query("SELECT * from Login");
      return  products.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

  async  function  getLogin(loginId) {
    try {
      let  pool = await  sql.connect(config);
      let  product = await  pool.request()
      .input('input_parameter', sql.Int, loginId)
      .query("SELECT * from Login where User_Id = @input_parameter");
      return  product.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

  

  async  function  addLogin(login) {
    try {
      let  pool = await  sql.connect(config);
      let  insertProduct = await  pool.request()
      .input('User_Id', sql.Int, login.User_Id)
      .input('User_Name', sql.NVarChar, login.User_Name)
      .input('User_Pass', sql.Int, login.User_Pass)
      .input('Name', sql.NVarChar, login.Name)
      .input('User_Email', sql.NVarChar, login.User_Email)
      .input('User_Mobile', sql.NVarChar, login.User_Mobile)
      .input('Role_ID', sql.NVarChar, login.Role_ID)
      .input('CreatedBy', sql.NVarChar, login.CreatedBy)
      .input('modifyBy', sql.NVarChar, login.modifyBy)
      .input('modifyDate', sql.NVarChar, login.modifyDate);
      return  insertProduct.recordsets;

    
    }
    catch (err) {
      console.log(err);
    }
  }

  module.exports = {
    getLogins:  getLogins,
    getLogin:  getLogin,
    addLogin:  addLogin
  }