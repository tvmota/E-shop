'use strict'
const ObjectID = require('mongodb').ObjectID;
/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')
const Product = use('App/Model/Product')
const User = use('App/Model/User')
const Validator = use('Validator')
const Hash = use('Hash')

Route.on('/').render('welcome')
Route.post('login','AuthController.login')
Route.post('check','AuthController.check')
Route.resource('products','ProductController')

Route.get('/teste', function * (req, res){
  /*let product = new Product({
    _id: ObjectID("59f7795634026340020d16ac"),
    nome: "teste20",
    descricao: "teste20",
    categoria: "teste20",
    valor: 66.98
  })
  /*let product = {r:'nada aconteceu'}
  let novoproduct = {
    nome: 'teste3',
    descricao: 'asdasasdasdsadd',
    categoria: 'teste5',
    valor: 0
  }
  const validation = yield Validator.validate(novoproduct, Product.rules)

  if(validation.fails()){
    product = validation.messages()
  }

  yield res.send(product)*/

  /*yield product.save()
  yield res.send(product)*/

  /*const login = yield req.auth.attempt('tmota', 'abc124')
  if(login) {
    yield res.send('logado')
    return
  }
  res.unauthorized('Invalid Credentails')*/

  try{
    const tkn = yield req.auth.attempt('tmota', 'abc1232')
    res.send({token: tkn})
    return
  } catch (e) {
    res.status(401).send({error: e.message})
  }
})
