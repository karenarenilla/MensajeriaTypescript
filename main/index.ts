require('app-module-path').addPath(__dirname);
import express from "express"
import MongoConect from "contrib/connections/mongo"
import allRoutes from "routes/allRoutes"
import bodyParser from "body-parser"

const port = 3000;
const app = express();

app.listen( port, ()=> {
    console.log(`server on port ${port}`);
})
app.use(bodyParser.json());

// Connection
MongoConect.getInstance();

// Route
new allRoutes(app);