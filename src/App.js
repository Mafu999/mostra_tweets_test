//Importando dependencias no app
const { query } = require('express')
const express = require('express')
const Twit = require('twit')
//instanciando express para uso no app
const app = express()
//Importando dados de tolken
const T = require('./Token/token')
const Tweet = require('./Model/tweet')

//Essa variável é onde fica guardado o hashtag desejado. o codigo %23 é uma hashtag em url encode.
let contentOfTweet = '%23GTA'

app.get('/tweets', (request, response)=>{

    T.get(`https://api.twitter.com/1.1/search/tweets.json?q=${contentOfTweet}&result_type=mixed&count=1`, (err, data, response)=>{
     
    try{
              
               let resultado = data.statuses.map(function(elemen){
                
                  return[elemen.user.id.toString(), 
                        elemen.user.name, 
                        elemen.user.screen_name, 
                        elemen.text, 
                        elemen.entities.hashtags.map(function(hash){
                            return hash.object
                        })] 
              })
            
              const geraPost = new Tweet(resultado[0].slice(0, 1), resultado[0].slice(1,2), resultado[0].slice(2,3), resultado[0].slice(3,4), resultado[0].slice(4,5))
              module.exports = geraPost
              console.log(geraPost)
            }
        catch(err){
            //é necessário esse if?
            if (err){
            console.log(`${err}`)
            }
        } 
        
    })
    
    response.sendStatus(200)
})

app.listen(1112)


