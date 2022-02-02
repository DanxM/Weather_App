require('dotenv').config();
const express = require('express');
const path = require('path');
const https = require('https');
const bodyParser = require("body-parser");
const app = express();
const port =process.env.PORT || 3001;


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client/public')));

// app.get('/',(req,res)=>{
//   res.send('Hello World')
// })


app.get('/weather/:city',function(req,res){
  var city = req.params.city;
  var units = 'metric';
  console.log(city);

  var url='https://api.openweathermap.org/data/2.5/weather?q='+ city + '&units='+ units +'&appid='+ process.env.API_KEY;

  https.get(url,(resp)=>{
    console.log('statusCode',resp.statusCode);
    console.log('headers:',resp.headers);

    resp.on('data',(data)=>{
      const weather = JSON.parse(data);
      // let description=weather.weather[0].description;
      //
      // console.log(description);
      console.log(weather);
      // res.json({description:description});
      res.json(weather);

    });


  }).on('error', (e) => {
  console.error(e);
});

});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'));
});


app.listen(port, ()=> {
  console.log('We listen at '+ port);
})
