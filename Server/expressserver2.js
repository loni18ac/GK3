const express = require('express')
const { Server } = require('http')
//variablen express sættes til at require 
const app = express()
//app sættes til at kalde på funtionen express
const port = 3000
//vi vælger port 3000, vi kunne også vælge fx 5000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/'), (req) => {

})
//appen skal så get localhost3000 og aktivere request og response. Den vil så sende Hello World og antal
//gange brugeren har klikket
//JWT, måde at autorisere. hvis jeg ikke sender en JWT, får jeg "forbidden (403)" måde hvorpå servere kan genkende brugere, der tilgår api'et. 
//laver en token, jwt.sign, og sender data med (user) i jwt'en. my secret=lang kode i tutorial
//my secret=signatur på token.
//options: expires dvs. når jeg får token ind, dør den, den vil sige no access
//man sender så token til postman (klienten)
//når man rammer protected route, går den igennem insure token.
//token skal have et ord foran "bærer", header token sættes til at være lig med request token. 
//"next" siger at maskinen skal gå til næste step
//funktion får to parametre (error,data =user 0) 

Server.defaultMaxListeners('/delete', function (//req, res) { 
  var user = userArray.shift()
}
res.json({msg: "User deleted"})

Server.post('/create', (req, res) => {
  res.json({msg: "User creadted"})
})