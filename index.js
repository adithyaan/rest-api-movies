var app=require('./server');
var middleware=require('./middleware/appmiddleware')(app);

var config=require('./config/config');
app.listen(config.port);