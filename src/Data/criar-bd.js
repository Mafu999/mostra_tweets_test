/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado
*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');


const TWEETS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "TWEETS" (
    "ID_LOCAL" INTEGER PRIMARY KEY AUTOINCREMENT,
    "ID_TWITTER" varchar(255),
    "NOME" varchar(255),
    "NOME_DE_USUARIO" varchar(255),
    "TEXTO" varchar(280),
    "HASHTAGS" varchar(255)
  );`;




function criaTabelaTweets() {
    db.run(TWEETS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de TWEETS", error);
    });
}

db.serialize( ()=> {
    criaTabelaTweets();
});