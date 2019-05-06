var express = require("express");
var app = express();
var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20");
var cookieSession = require("cookie-session");

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["randomstringhere"]
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: ""
}))