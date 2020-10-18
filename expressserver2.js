const express = require('express')
//Vi importerer express
const User = require('./User.js')
const FreeUser = require('./FreeUser.js')
const PaymentUser = require('./PaymentUser')
const Interest = require('./Interest')
const match = require('./match')
const image = require('./image')
//alle klasser er nu gemt i constants i serveren

const Server = express()
//server sættes til at kalde på express
const port = 3000
//vi vælger port 3000, vi kunne også vælge fx 5000


const harduser = require('./harduser.js')
//indeholder array så det kan testes i postman
Server.get('/user1', (req, res) => {
  res.send(harduser[0]);
})

const hardmatch = require('./hardmatch.js')
Server.get('/match1', (req, res) => {
  res.send(hardmatch[0]);
})

const hardinterest = require('./hardinterest.js')
Server.get('/Interest1', (req, res) => {
  res.send(hardinterest[0]);
})

//User endpoint: besked, der sendes, når man opretter en bruger
Server.post('/user/create', function (req, res){
  res.json({msg: "User created"})
})
//User endpoint: besked, der sendes, når brugeren sletter sin profil
Server.delete('/user/delete', function (req, res) {
  res.json({msg: "User deleted"})
})
/*
Interest endpoint: besked, der sendes, når brugeren opretter en beskrivelse af sine interesser, 
såsom hobbier, beskæftigelse seksuelle præferencer 
*/
Server.post('/interest/create', function (req, res) {
  res.json({msg: "Interest registered"})
}
)
//Match endpoint: besked, der sendes, når brugeren sletter sine nuværende matches
Server.delete('/match/delete', function (req, res)  {
  res.json({msg: "Match deleted"})
})

//login controller nedenfor
function loginController(req, res) {
    //Normalt vil man kigge om password og brugernavn stemmer, men det springer vi over
    //normalt vil man gemme secret key et andet sted. 
    //Her laves en token, som dør om en time (no access)
    const token = jwt.sign({user}, 'my_secret', { expiresIn: '1h' })
    res.json({
        token: token
    })
}

module.exports = loginController

Server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
/*
JWT: måde at autorisere brugere på, altså så servere kan genkende brugere, der tilgår api'et. 
Hvis jeg ikke sender en JWT, får jeg "forbidden (403)".
My secret=signatur på token.
Options: expires dvs. når jeg får token ind, dør den, den vil sige no access
Man sender token til postman (klienten). Når man rammer protected route, går den igennem ensure token.
*/