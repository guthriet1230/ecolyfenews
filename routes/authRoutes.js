const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    )

    app.get('/auth/google/callback', passport.authenticate('google'))

    //first argument is the route and the second is the function we want to execute when we hit that route (req = request from the browesr, res = response from our node.js server)
    app.get('/api/logout', (req, res) => {
        // passport function, kills the cookie from the application
        req.logout()
        res.send(req.user)
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })

    app.get('/', (req, res) => {
        res.send('Hello')
    })

}