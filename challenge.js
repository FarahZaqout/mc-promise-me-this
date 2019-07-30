const https = require('https')

const makePokeUrl = pokemon => `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
const pikaUrl = makePokeUrl('pikachu')
const bulbasaurUrl = makePokeUrl('bulbasaur')
const charmanderUrl = makePokeUrl('charmander')

// API CALL TO POKEMON
const myApiCall = (url, callback) => {
  https
    .get(url, resp => {
      let data = ''
      resp.on('data', chunk => {
        data += chunk
      })
      resp.on('end', () => {
          callback(null, JSON.parse(data))
      })
    })
    .on('error', err => {
      callback(err.message)
    })
}

// API CALL INVOCATION
myApiCall(pikaUrl, (err, res) => {
  if (err) console.log(res)
  else console.log(res)
})

//Now let's make it a Promise

//And call it here...
