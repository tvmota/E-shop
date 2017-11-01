# L-ShopApp(mini e-shop)

Para este projeto foram utilizados os seguintes frameworks:

- [AdonisJs](//adonisjs.com) v3.2(Back-end / Framework nodejs)
- [Vue.js](//vuejs.org) v2.5(Front-end / UI framework)
- [Twitter Bootstrap](//getbootstrap.com) v4.0 (Toolkit CSS)

Para o banco de dados foi utilizado o mongoDB, com 2 coleções:
> Products:
> Schema( nome: String, descricao: String, categoria: String, valor: Number, img: String)

> Users:
> Schema( username: String, password:String, menu: Array[ Object ])

## Para excução do projeto

Para executar o projeto é necessário ter o nodejs(8.x.x) instalado, clonar o projeto em uma pasta qualquer, acessar o diretorio com o projeto clonado e executar o comando:
``` bash
$ npm i
```
Após instalar as dependencias, para executar um servidor de desenvolvimento e ainda no terminal executar
``` bash
$ npm run serve:dev
```
Será iniciado um servidor em http://localhost:3333