const mongoose = require('mongoose')
// Deconstruction: mongoose object has an object called Schema. Grab that Schema and assign it to the const 'Schema'
const { Schema } = mongoose;

const newArticleSchema = new Schema({
    header: { type: String, required: true },
    subheader: { type: String, required: true },
    body: { type: String, required: true },
    // category: {
    //     type: String,
    //     // required: true 
    // },
    // date: Date,
    // likes: { type: Number, default: 0 },
    // // by convention, underscore means this is connecting to another schema
    // // helps define the relatsionship between an article and a
    // _user: { type: Schema.Types.ObjectId, ref: 'User' }
})

//create a new mongoose model that creates a collection called 'users', payload: userSchema
// sidenote: one argument means pulling from mongoDB and two arguments means setting an argument (userSchema) to the database 
mongoose.model('newArticle', newArticleSchema) 