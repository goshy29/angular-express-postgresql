const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./utils/db-connection");

const HttpError = require("./models/http-error");

const blogRoutes = require("./routes/blog-routes");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
});

app.use("/api/blogs", blogRoutes);

app.use((req, res, next) => {
    const error = new HttpError("Could not find this route", 404);
    throw error;
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }

    res.status(error.code || 500).json({ message: error.message || "An unknown error." });
}); 


sequelize.sync()
    .then(() => {
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    });