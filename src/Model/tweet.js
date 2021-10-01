module.exports = class Tweet {
    constructor(id, nome, nome_de_usuario, texto, hashtags){
        this.id = id
        this.nome= nome
        this.nome_de_usuario= nome_de_usuario
        this.texto = texto
        this.hashtags = hashtags
    }
}