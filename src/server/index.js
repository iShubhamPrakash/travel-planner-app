const app = require('./app');

// designates what port the app will listen to for incoming requests
const port = process.env.PORT || 8000;

app.listen(port, function () {
    console.log(`App listening on port ${port}!`)
})