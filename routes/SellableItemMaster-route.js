//const router = require('express-promise-router')();
var  express = require('express');var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

//const { DashboardController } = require('../controllers/basecontroller');
const sellableItemController = require('../controllers/SellableItemMaster.controller');

router.route('/addItem')
.post(sellableItemController.addItem)

router.route('/getItem')
.post(sellableItemController.getItemById)

router.route('/updateItem')
.post(sellableItemController.updateItemById)

router.route('/deleteItem')
.post(sellableItemController.deleteItemById)


module.exports.router = router;  