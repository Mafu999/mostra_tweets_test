//Importando dependencias no app
const { query } = require('express')
const express = require('express')
const Twit = require('twit')
//instanciando express para uso no app
const app = express()
//Importando dados de tolken
const T = require('./Token/token')

//Essa variável é onde fica guardado o hashtag desejado. o codigo %23 é uma hashtag em url encode.
let contentOfTweet = '%23GTA'

app.get('/tweets', (request, response)=>{

    T.get(`https://api.twitter.com/1.1/search/tweets.json?q=${contentOfTweet}&result_type=recent`, (err, data, response)=>{
    //const result = [data.statuses.id, data.statuses.user, data.statuses.text]    
    try{
            //var percorreDados = ()=>{ for(let i = 0; i < data.statuses.length; i++){  
               let parametros = data.statuses.map(function(elemen){
                return [{
                    id: elemen.user.id, 
                    nome: elemen.user.name,
                    nome_de_usuario: elemen.user.screen_name,
                    texto: elemen.text,
                    hashtags: elemen.entities.hashtags.slice(0,30)
                }]
              })
              console.log(parametros)
              
            }
            
        
        //console.log(percorreDados())
     
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

module.exports = parametros
