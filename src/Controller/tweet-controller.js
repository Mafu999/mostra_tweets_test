const TweetDao = require('../DAO/tweet-dao')

module.exports = (app, bd) =>{
    const dao = new TweetDao(bd)
}