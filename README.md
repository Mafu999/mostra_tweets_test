<h1 align="center"> 

![Logo](https://pbs.twimg.com/profile_images/1354485966254206978/1F6Gm-LZ_400x400.jpg) </h1>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#pré-requisitos">Pré-Requisitos</a> • 
 <a href="#rodando-o-projeto">Rodando o projeto</a> • 
 <a href="#tecnologias">Tecnologias</a> •  
 <a href="#consumindo">Api do Twitter</a>
</p>

<h1 align="center">Controle Tweet</h1>

### Sobre

Desenvolvimento de um mecanismo de controle que faz buscas específicas de tweets utilizando a API do Twitter e salva as informações localmente.

---
### Pré-requisitos 

Antes de começar, você precisa ter instalado em sua máqusina as seguintes ferramentas:

[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

---
### Rodando o projeto  

```bash
# Clone este repositório
$ git clone <https://github.com/Mafu999/mostra_tweets_test.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd mostra_tweets_test

# Instale a npm
$ npm install

# Instale as tecnologias a seguir
```

---
### Tecnologias

As seguintes ferramentas foram utilizadas na construção do projeto:

- [React](https://reactjs.org/)
- [React Hook Form](https://react-hook-form.com/get-started)
- [React Router Dom](https://reactrouter.com/web/guides/quick-start)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Node](https://www.npmjs.com/package/node)
- [SQLite](https://www.npmjs.com/package/sqlite)
- [Twit](https://www.npmjs.com/package/twit)
---
<h2 align="center">API do Twitter</h2>

### Consumindo
Para consumir a API do twitter, é necessário criar uma conta na [Plataforma Dev](https://developer.twitter.com/en/products/twitter-api) deles e guardar os tokens de acesso para usa-los na requisição através da Lib "Twit". Deixo aqui um [artigo](https://medium.com/@diegomagasouza/como-acessar-e-consumir-a-api-do-twitter-com-nodejs-1ba6545b7203) para ajudar a fazer esse trâmite.
---
<h2 align="center">Observações</h2>

Este projeto está incompleto e falta apenas dois passos para que ele funcione:
<ol>
  <li>Exportar dados de requisição da API para uma view em react</li>
  <li>Depois de validados nessa view, salvá-los no banco SQLite interno</li>
</ol>
