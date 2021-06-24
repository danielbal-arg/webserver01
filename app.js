require('dotenv').config();
const express = require('express')
const app = express();

 

//middleware
app.use(express.static('public'));
 
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
  })

  app.get('*', (req, res) => {
    res.send('404')
  })

app.listen(process.env.PORT)