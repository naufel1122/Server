console.log("This server is express hello world server");


import express from 'express';
import cors from 'cors';
import path from path;

const app = express();
app.use(cors())


// http://:192.168.1.104:3000
app.get('/', (req, res) => {
  console.log('Hello World!', new Date());
  res.send('Hello World!' + new Date())
});
app.get('/profile', (req, res) => {
  console.log('This is profile', new Date());
  res.send('This is Profile!' + new Date())
});
app.get('/weather/:cityName', (req, res) => {
  console.log('This is profile', new Date());

  let weatherData = {
    karachi: {
      city: karachi,
      TempInC: '40°C',
      maxTemp: '45°C',
      minTemp: '30°C',
      Humidity: '30'
    },
    Lahore: {
      city: "Lahore",
      TempInC: '35°C',
      maxTemp: '32°C',
      minTemp: '22°C',
      Humidity: '50'
    },
  }

  let userInputCityName = req.params.cityName.toLowerCase();
  console.log("userInputCityName :", userInputCityName);

  let weatherDataToSend = weatherData[userInputCityName];

  if(weatherDataToSend) {
    res.send(weatherDataToSend);
  }else {
    res
      .status(404)
      .send(`Weather is not Available for  ${req.params.cityName}`);
  }
});

app.use('/',express.static(path.join(__dirname,'public')))


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`)
})