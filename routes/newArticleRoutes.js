// require our mongoose schema like this so we dont continuously import the same schema in testing
const mongoose = require('mongoose')
const Article = mongoose.model('newArticle')
// const db = require("../models");

const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
    // app.get('/api/new-article', (req, res) => {
    //     console.log(req)
    //     res.json(req.user)
    //     res.redirect('/')
    //     res.end();
    // })

    // use the require middleware to make sure that they're logged in. if they aren't logged in. The requireLogin middleware will fire 'you must log in'
    // you can add as many functions as you want until a res.end or res.send is hit 
    app.post('/api/new-article',
        requireLogin,
        (req, res) => {

            // const { header, subheader, body, category, likes } = req.body
            const article = new Article({
                header: req.body.header,
                // subheader: req.body.subheader,
                // body: req.body.body,
                // category: req.body.category,
                // date: Date.now(),
                // likes: req.body.category,
                // _user: req.user.id
            }).save().then(result => {
                console.log(result)
                console.log('article saved')
            }).catch(err => {
                console.log(err)
            })
        })

    // app.post("/articles/:id", function (req, res) {

    //     db.Note.create(req.body)
    //         .then(function (dbNote) {
    //             return db.Article.findOneAndUpdate({ _id: req.params.id }, { $push: { note: dbNote._id } }, { new: true })
    //         })
    //         .then(function (dbArticle) {
    //             res.json(dbArticle);
    //         })
    //         .catch(function (err) {
    //             res.json(err);
    //         })
    // });

}