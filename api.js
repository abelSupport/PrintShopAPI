var  Db = require('./dboperations');
var  Order = require('./Login');
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
  console.log('middleware');
  next();
});

  router.route('/logins').get((request, response) => {
    Db.getLogins().then((data) => {
      response.json(data[0]);
    })
  })

  router.route('/logins').post((request, response) => {
    let  order = { ...request.body }
    Db.addLogin(order).then(data  => {
      response.status(201).json(data);
    })
  })


  router.route('/logins/:userid').get((request, response) => {
    console.log("1")
    Db.getLogin(request.params.userid).then((data) => {
      response.json(data[0]);
    })
  })

  var  port = process.env.PORT || 8090;
  app.listen(port);
  console.log('Order API is runnning at ' + port);

 