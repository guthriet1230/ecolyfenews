const proxy = require('http-proxy-middleware')

// this proxy is necessary in the development environment because it helps send along all our api requests to the correct location. In production these requests go straight to the backend via express, so no proxy is needed
module.exports = function (app) {
    app.use(proxy([
        '/api', // this sends all routing requests for api's to the backend (localHost:5000) 
        '/auth/google'], // this sends the google oAuth request to the appropriate url (localHost:5000)
        { target: 'http://localhost:5000' }));
}