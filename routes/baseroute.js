//const express=require('express');
//const router=require('express-promise-router')();

var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

router.get('/', function(req, res) {
    res.send('Welcome to Node JS Routes');
  });

  router.use('/login', require('./auth-route').router);

  router.use('/papertypemaster', require('./PaperTypeMaster-route').router);
  router.use('/papermaster', require('./paperMaster-route').router);
  router.use('/printtypemaster', require('./PrintTypeMaste-route').router);
  router.use('/sizemaster', require('./SizeMaster-route').router);
  router.use('/printsitemaster', require('./PrintSiteMaster-route').router);
  router.use('/orientationmaster', require('./OrientationMaster-route').router);
  router.use('/customermaster', require('./CustomerMaster-route').router);
  router.use('/login', require('./Login-route').router);
  router.use('/sellableItem', require('./SellableItemMaster-route').router);
 
  module.exports=router;