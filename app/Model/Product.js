'use strict'

//const MongoritoModel = use('MongoritoModel')
const Lucid = use('Lucid')

class Product extends Lucid {

  static get dateFormat () {
    return 'DD/MM/Y HH:mm'
  }

  static get rules () {
    return {
      nome:       'required',
      descricao:  'required',
      categoria:  'required',
      valor:      'required|above:0'
    }
  }
}

module.exports = Product

/*const mongoose = use('Mongoose')

let productSchema = mongoose.Schema({
  nome: { type: String, required: true },
  categoria: { type: String, required: true },
  descricao: { type: String, required: true },
  valor: { type: Number, required: true }
})

module.exports = mongoose.model('Product', productSchema)*/
