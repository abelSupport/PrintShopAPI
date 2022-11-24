
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
//app.use(cors());
app.use(cors({
  origin: '*'
}));

app.use('/api', router);

const route=require('./routes/baseroute');
app.use('/api', route);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to printShop application." });
  });

//require("./routes/baseroute")(app);
var  port = process.env.PORT || 8090;
app.listen(port);
console.log('Login API is runnning at ' + port);