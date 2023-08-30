const express = require("express");
require('dotenv').config()
const cors = require("cors")
const app = express();
const initRoutes = require("./routes/user.routes")
const PORT = process.env.PORT;

const DB = require("./config/db.config")
const db = require('./models')


app.use(express.json());

app.use(express.urlencoded({ extended: true, limit: '50mb'}))

db.mongoose.connect(DB.db_url,{

    useNewUrlParser: true,
    useUnifiedTopology: true

})

.then(console.log("Connected successfully"))
.catch(err=>{console,log("Error message:" + err)})

initRoutes(app)

app.listen(PORT, () => {
    console.log(`Server is running @ port ${PORT}.`);
});