const http = require ('http');	     // For serving a basic web page.
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const router = require('./router');

const mongoose = require ("mongoose"); // The reason for this demo.
const uristring = process.env.MONGODB_URI || 'mongodb://localhost/HelloMongoose';
mongoose.connect(uristring);

// The http server will listen to an appropriate port, or default to port 5000.
const theport = process.env.PORT || 5000;

// mongoose.connect(uristring, function (err, res) {
//   if (err) console.log ('ERROR connecting to: ' + uristring + '. ' + err);
//   else console.log ('Succeeded connected to: ' + uristring);
// });

// app setup
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({type:'*/*'}));
router(app);

// create instance of express
const server = http.createServer(app);
server.listen(theport);
console.log('Server listening on:', theport, ' captain!');
