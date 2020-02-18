var constant = require('./utils/constant');

const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./route/routes');
routes(app);

app.listen(port, function() {
   console.log(constant.START_SERVER, port);
});