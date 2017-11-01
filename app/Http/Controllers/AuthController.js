'use strict'

const User = use('App/Model/User')


class AuthController {
  * login (req, res){
    try{
      const tkn = yield req.auth.attempt(req.input('user'),req.input('pwd') )
      let user = yield User.where('username',req.input('user')).fetch()
      user = user.toJSON()
      yield res.send({token: tkn, user: user[0] })
      return
    } catch (e) {
      yield res.status(401).send({error: e.message, msg:'Não foi possivel efetuar o login, verificar usuario e(ou) senha'})
    }
  }

  * check (req, res){
    const isLoggedIn = yield req.auth.check()

    if(!isLoggedIn) {
      yield res.unauthorized({error: 'voce deve estar logado primeiro'})
      return
    }

    yield res.send({msg: ok})
  }
}

module.exports = AuthController
