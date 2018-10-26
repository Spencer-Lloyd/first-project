const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 7001

const controller = require('./forceController')

app.use(bodyParser.json())


app.get('/api/people', controller.getCharacters)
app.post('/api/people', controller.createCharacters)
//Step 3 - axios post request from front end matches this route so callback gets invoked
app.post('/api/people/test', controller.sorted)



app.listen(port, () => {
    console.log('listening on port', port);
})