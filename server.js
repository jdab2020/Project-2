// *** Dependencies
// =============================================================
require('dotenv').config() // for initializing .env file | for keeping your passwords secret
const express = require("express");
// const session = require("express-session");
// const passport = require("./config/authentication");
const db = require("./models");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: process.env.session_secret, resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// Routes
// =============================================================
// app.use("/",apiRoutes);
// app.use("/",htmlRoutes);
// require("./routes/api-auth")(app)
// const apiRoutes = require ("./routes/apiRoutes");
// const htmlRoutes = require ("./routes/htmlRoutes");

require("./routes/api-routes-landing.js")(app);
// require("./routes/html-routes.js")(app); if we have one

// Starting our Express app ====== if using sequelize
// =============================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});