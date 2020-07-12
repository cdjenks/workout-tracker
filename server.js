const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3900;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/api-routes.js"));
require("./routes/html-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:dbpassword1@ds221155.mlab.com:21155/heroku_tvn8zz79", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useMongoClient: true
});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});