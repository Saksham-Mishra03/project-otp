const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')



const app  = express();
const port  = 8080;
//const db = require("./config/db.config")
const routes = require("./router/userroutes");

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})

app.use(cors());

// If you want to allow specific origins, you can configure it:
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with the allowed origin
    methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
    //allowedHeaders: 'Content-Type,Authorization', // Allowed headers
  };
  
  app.use(cors(corsOptions)); // Apply CORS with specific options

const db = require('../backend-node/models')
db.sequelize.sync();



app.use(express.json());
app.use('/', routes);