const express = require('express')
const bodyParser = require('body-parser')
// require Mail API
const mailApi = require('./routes/mailAPI')
const port = 3000
const app = express()

// configure body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.use('/mail', mailApi);

app.listen(port, () => {
  console.log(`REST API listening at http://localhost:${port}`)
})