const express = require('express');
const bodyParser = require('body-parser');
const logging = require('./src/middleware/logging');
const dbConnect = require('./src/config/db');
const logger = require('./src/utils/logger');
const { customLogger } = require('./src/utils/customLogger');
require('dotenv').config(); // Put the .env file variable to process.env object;
const app = express();
const PORT = process.env.PORT || 3000;

// Modify the request body data in readble format whether it's in query, params or body.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// database connection
dbConnect.initDbConnection(); 

app.use(function (req, res, next) {
	req.logger = {}
	req.logger.info = (message, label) => {
		let data = { "apiUrl": req.originalUrl };
		customLogger("info", message, (label || ''), data);
	}
	req.logger.error = (message, label) => {
		customLogger("error", message, (label || ''), { "apiUrl": req.originalUrl });
	}
	next()
})

// log every url path with it's method
logging(app);


let routes = require('./src/routes');
routes(app);

app.use((req, res, next) => {
    res.status(404).send({ errMsg: "Page Not Found"});
})

app.listen(PORT, function(){
    logger.info(`Server started at port ${PORT}`);
    console.log(`Server started at port ${PORT}`);
})