//Importando dependencias no app
const express = require('express')
const Twit = require('twit')
//instanciando express para uso no app
const app = express()
//Importando dados de tolken
const T = require('./Token/token')






let contentOfTweet = '%23GenshinImpact'
app.get('/tweets', (request, response)=>{

    T.get(`https://api.twitter.com/1.1/search/tweets.json?q=${contentOfTweet}&result_type=recent`, (err, data, response)=>{
        
            console.log(data)
        
    })

    response.sendStatus(200)
})

app.listen(1112)
