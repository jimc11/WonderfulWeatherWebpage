const request = require('request')


//mapbox 
const geocode = (address, callback) => {
    
    const mapKey = 'pk.eyJ1IjoiamltYzExIiwiYSI6ImNramo1NmN1ODFkcGMycm1wNzRnenIxMXgifQ.OpVj2Zw1DErMTd0y-9JVbA'

    //encode uri component just is extra error handling. allows http requests if address has weird characters by converting ? to % and stuff
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + mapKey + '&limit=1'

    //mapbox request
    request({ url, json: true }, (error, {body})=> {
        
        if (error) {
            callback('Mapbox error.')
        } else if (body.features.length === 0){
            callback('bad http request, or unable connect to mapbox')
        }
        else {
            const coords = [body.features[0].center[0], body.features[0].center[1]]
            
            callback(undefined, {
                latitude: body.features[0].center[1], // idk why they chose latitude to be at index 1 and longitude at index 0
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
                }
            ) 
        
        }
    })

}

app.listen(port, () => {
    console.log('server is up on port ' + port )
})


// this file exports the function 'geocode'.  to import, say " const geocode = require('./utils/geocode')
module.exports = geocode

