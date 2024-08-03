//Server.js file app.js

const express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = 
        require("passport-local-mongoose");
const User = require("./model2/GDB");
let app = express();

mongoose.connect("mongodb://localhost:27017/Matrimony");

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
    res.render("home2");
});

// Showing secret page
app.get("/secret2", isLoggedIn, function (req, res) {
    res.render("secret2");
});

// Showing register formisLoggedIn
app.get("/register2", function (req, res) {
    res.render("register2");
});

// Handling user signup
app.post("/register2", async (req, res) => {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
      email:req.body.email,
      dob:req.body.dob,
      age:req.body.age
    });
  
    return res.status(200).json(user);
  });

//Showing login form
app.get("/login2", function (req, res) {
    res.render("login2");
});

//Handling user login
app.post("/login2", async function(req, res){
    try {
        // check if the user exists
        const user = await User.findOne({ username: req.body.username });
        if (user) {
          //check if password matches
          const result = req.body.password === user.password;
          if (result) {
            res.render("secret2");
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
    res.redirect("/login2");
}


app.listen(3000, function () {
    console.log("Server Has Started!");
});