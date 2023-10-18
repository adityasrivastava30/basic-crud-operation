const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json()) // to conver the incoming data into the format of Json
app.use(express.urlencoded({extended : true})) // to read url encoded stuff

app.use('/api', apiRoutes);



app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
