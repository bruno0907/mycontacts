const express = require('express');
require('express-async-errors');

const routes = require('./routes');
const errorHandler = require('./app/middlewares/ErrorHandler');
const cors = require('./app/middlewares/cors');

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

// eslint-disable-next-line no-console
app.listen(3333, () => console.log('🔥 Server started at http://localhost:3333'));
