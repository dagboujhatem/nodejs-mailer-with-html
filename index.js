const express = require('express')
const bodyParser = require('body-parser')
// require Mail API
const mailApi = require('./routes/mailAPI')
const port = 3000
const app = express()
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});
const upload = multer({ storage: storage })

// configure body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.use('/mail', mailApi);

app.post('/upload', upload.single('file') ,(req, res)=>{
  res.json({message: 'file uploaded successfully!'});
})
app.listen(port, () => {
  console.log(`REST API listening at http://localhost:${port}`)
})