const request = require('request')

const weather = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3160d2421ac1c5a0fdd9f01d169e6326&query=' + latitude + ',' + longitude + '&units=f' // plug in lat and long here
    //weatherstack request
    request({ url, json: true }, (error, {body})=> {
        //console.log(response.body)
        if (error) {
            callback('Weatherstack error', undefined)
        } else if(body.length === 0) {
            callback('bad http request, or unable to find location', undefined)
        }
        else {
            callback(undefined, {
                location: body.location.name,
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike
            })
            }
    })
}

module.exports = weather