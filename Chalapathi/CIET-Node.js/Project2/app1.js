//Server.js file app.js

const express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = 
        require("passport-local-mongoose");
const User = require("./model1/country");
let app = express();

mongoose.connect("mongodb://localhost:27017/Politics");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//=====================
// ROUTES
//=====================

// Showing home page
app.get("/", function (req, res) {
    res.render("home1");
});

// Showing secret page
app.get("/secret1", isLoggedIn, function (req, res) {
    res.render("secret1");
});

// Showing register formisLoggedIn
app.get("/register1", function (req, res) {
    res.render("register1");
});

// Handling user signup
app.post("/register1", async (req, res) => {
    const user = await User.create({
      username: req.body.cname,
      password: req.body.password,
      cid:req.body.idnumber,
      dob:req.body.dob,
      address:req.body.address
    });
  
    return res.status(200).json(user);
  });

//Showing login form
app.get("/login1", function (req, res) {
    res.render("login1");
});

//Handling user login
app.post("/login1", async function(req, res){
    try {
        // check if the user exists
        const user = await User.findOne({ username: req.body.username });
        if (user) {
          //check if password matches
          const result = req.body.password === user.password;
          if (result) {
            res.render("secret1");
          } else {
            res.status(400).json({ error: "password doesn't match" });
          }
        } else {
          res.status(400).json({ error: "User doesn't exist" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
});

//Handling user logout 
app.get("/logout", function (req, res) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
});



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login1");
}


app.listen(3000, function () {
    console.log("Server Has Started!");
});