const request = require('request')
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')



//const address = process.argv[2] // gets user input from run command : node app.js "95946"

// app.get('', (req,res) => {
//    res.send('index', {        // no file extension!
//       title: 'Weather App',  // these will change from page to page!
//       name: 'James Crowley' // they are accessed in the .hbs file
//    }) 
// })

app.get('/about', (req, res) => {
   res.render('about', {
      title: 'About Me',
      text: 'This is some text about me'
   })
})

if (!address){
   console.log('Please provide an address')
} else {
   // Geocode gets the lat and long for arg1 and calls arg2 when complete
   geocode(address, (geoError, {latitude, longitude, location} = {}) => { // program will crash if error occurs and you try to define lat and long from nothing
      


      if (geoError){
         console.log(geoError)
      } else {
         // weather takes the lat and long for arg 1 and 2 and then calls arg3 when complete
         //console.log(geoData.location)
         weather( latitude, longitude, (weatherError, {location, description, temperature} = {}) => {

         if (weatherError){
            console.log(weatherError)
         } else {
            //console.log(weatherData.location)
            console.log('In '+ location + ', it is '+ description + ' and the temperature is ' + temperature + 'F') 
         }      
      })
      }   
   })    
}



