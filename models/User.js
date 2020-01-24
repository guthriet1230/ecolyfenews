const mongoose = require('mongoose')
// Deconstruction: mongoose object has an object called Schema. Grab that Schema and assign it to the const 'Schema'
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    googleImage: String,
    firstName: String,
    lastName: String,
})

//create a new mongoose model that creates a collection called 'users', payload: userSchema
// sidenote: one argument means pulling from mongoDB and two arguments means setting and argument (userSchema) to the database 
mongoose.model('users', userSchema)