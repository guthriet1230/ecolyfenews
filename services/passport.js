const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys')

//this loads the users table. we do it this way so if we test things it might not continuously load and provide an error
const User = mongoose.model('users')

// this is a function that encodes (or serializes) the user information from our server so that we can move around in the browser with full access and keep the profile information secure
passport.serializeUser((user, done) => {
    //this user.id is the id assigned by the mongoDB database for our user. we'll use this id as we can have multiple ways to signin (FB oAuth, Spotify oAuth, etc). 
    done(null, user.id)
})

// this userId is the serialized mongoDB Id found in the serialize done() function
passport.deserializeUser((userId, done) => {
    User.findById(userId).then(user => {
        done(null, user)
    })
})

// console.log(User)
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
},
    // async (accessToken, refreshToken, profile, done) => {
    //     //mongoose method .findOne({}) helps find an item in a collection this query returns a promise as this is asynchronous 
    //     //this says find the UserID that with the first record of profile.id
    //     const existingUser = await User.findOne({ googleId: profile.id })
    //         .then(existingUser => {
    //             if (existingUser) {
    //                 //we already have a record with the given profileid

    //                 // done is a passport function that says we're done with passport. The first argument is for err's, but we're in an if statement where we did recieve a user, so this is null. The second argument is the user record or payload
    //                 return done(null, existingUser)
    //             } else {
    //                 // we dont have a user record with this id, so make a new record
    //                 // this creates a new model instance and saves it to the database. Saving a record to MongoDB is an asynchronous action
    //                 const user = await new User({ googleId: profile.id }).save()
    //                 //this then says we're done and provides the new user. this 'user' is cleaner than the profile.id above
    //                 done(null, user)
    //             }
    //         })

    // }
    async (accessToken, refreshToken, profile, done) => {
        try {
            //mongoose method .findOne({}) helps find an item in a collection this query returns a promise as this is asynchronous 
            //     //this says find the UserID that with the first record of profile.id
            let user = await User.findOne({ googleId: profile.id });
            // we dont have a user record with this id, so make a new record
            // this creates a new model instance and saves it to the database. Saving a record to MongoDB is an asynchronous action
            if (!user) user = await new User({ googleId: profile.id }).save();
            // done is a passport function that says we're done with passport. The first argument is for err's, but we're in an if statement where we did recieve a user, so this is null. The second argument is the user record or payload
            done(null, user);
        } catch (err) {
            console.log(err);
        }
    }

));
