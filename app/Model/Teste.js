'use strict'

const Model = use('Lucid')

class Teste extends Model {
  static get table(){
    return 'users'
  }
}

module.exports = Teste
