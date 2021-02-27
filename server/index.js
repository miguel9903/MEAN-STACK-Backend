const express = require('express');
const morgan = require('morgan');
const mongoose = require('./database/connection');
const cors = require('cors');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Config CORS
app.use(cors());

// Routes
app.use('/api/employees/', require('./routes/employee.routes'));

// Static Files

// Start server
app.listen(app.get('port'), () => {
    console.log(`App listening on port ${ app.get('port') }`);
});