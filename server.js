const Express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const bd = require('./src/Data/sqlite-bd')
const tweetController = require('./src/Controller/tweet-controller')
const app = Express()
const port = 4020

app.use(cors())
app.use(bodyParser.json())

tweetController(app, bd)



app.listen(port, ()=>console.log(`Servidor rodando na porta ${port}`))