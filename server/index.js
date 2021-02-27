const express = require('express');
const morgan = require('morgan');
const mongoose = require('./database/connection');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Config headers and CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Routes
app.use('/api/employees/', require('./routes/employee.routes'));

// Static Files

// Start server
app.listen(app.get('port'), () => {
    console.log(`App listening on port ${ app.get('port') }`);
});