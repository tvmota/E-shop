'use strict'

const MongoritoModel = use('MongoritoModel')

class Token extends MongoritoModel {

  user () {
    return this.belongsTo('App/Model/User')
  }

}

module.exports = Token
