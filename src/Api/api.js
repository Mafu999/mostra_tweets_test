//Importando dependencias no app
const { query } = require('express')
const express = require('express')
const Twit = require('twit')
//instanciando express para uso no app
const app = express()
//Importando dados de tolken
require('dotenv').config()

const App = new Twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET_KEY,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000,
})

function BuscaTweet() {
    var query = {
        q: "#GTA",
        result_type: "recent",
    };

    App.get ("search/tweets", query, RetornaTweets);

     function RetornaTweets(error, data, response) {
        if (error){
            console.log("Bot não conseguiu pegar os tweets")
        }else{
            var tweet = {
                id: data.statuses[0].user.id,
                nome: data.statuses[0].user.name,
                nome_de_usuario: data.statuses[0].user.screen_name,
                texto: data.statuses[0].text,
                hashtags: data.statuses[0].entities.hashtags

            }
            
            
        }
        console.log(tweet)
    }
    
}

BuscaTweet()

