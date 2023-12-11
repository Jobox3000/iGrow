// app.js
var defaultConfig = require('./config/default');
var connectDB = require('./config/database');
var indexRouter = require('./routes/index');
var app = defaultConfig.getExpressConfig();


/* #(express) Config Default */
app.use(defaultConfig.getCommonMiddleware());


// Connessione a MongoDB
connectDB();

// Router
app.use('/', indexRouter);


/* #(express) Config Default */
app.use(...defaultConfig.getDefaultErrorMiddleware());


module.exports = app;