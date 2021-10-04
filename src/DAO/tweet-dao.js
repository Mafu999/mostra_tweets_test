module.exports = class TweetDao {
    
    constructor(bd){
        this.bd = bd
    }

    SendTweet(){
        return new Promise((resolve, reject)=>{
            const query =  'INSERT INTO TWEETS (ID_TWITTER, NOME, NOME_DE_USUARIO, TEXTO, HASHTAGS) VALUES (?, ?, ?, ?, ?)'
            const parametros = [params[0], params[1], params[2], params[3], params[4]]
        })
    }
    
   
}
