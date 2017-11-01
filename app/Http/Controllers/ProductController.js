'use strict'

const Product = use('App/Model/Product')
const Validator = use('Validator')
const _lang = use('lodash/lang')

class ProductController {

  // Metodo que lista todos produtos
  * index (req, resp) {
    yield resp.send( yield Product.all() )
  }

  // Metodo que procura pelo id e retorna os dados do produto
  * show (req, resp) {
    yield resp.send( yield Product.find(req.param('id')) )
  }

  // Metodo para adição de um produto
  * store (req, resp) {
    const newProd = req.all()
    const validation = yield Validator.validate(newProd, Product.rules)
    let product = null
    let result = {alter:false}

    if( validation.fails() ){
      result['msg'] = 'Não foi possivel adicionar o novo produto, verificar os dados'
      result['err'] = validation.messages()
    } else {
      product = new Product( req.all() )
      yield product.save()
      result.alter = true
      result['msg'] = 'Produto criado com sucesso'
    }

    yield resp.send(result)
  }

  //Metodo de alterção de produtos
  * update (req, resp) {
    let alterProduct = req.all()
    let product = yield Product.find( req.param('id') )
    let result = { alter:false }
    let validation = yield Validator.validate(newProd, Product.rules)

    if(validation.fails()){
      result['msg'] = 'Não foi possivel alterar o produto, verificar os dados'
      result['err'] = validation.messages()
    } else {
      if( _lang.isEqual( alterProduct, product.toJSON() ) ){
        result['msg'] = 'Dados sem alterações'
      } else {
        product.fill(alterProduct)
        yield product.save()
        result.alter = true
        result['msg'] = 'Produto alterado com sucesso'
        result['product'] = product
      }
    }

    yield resp.send(result)
  }

  // Metodo que remove um produto
  * destroy (req, resp) {
    let id = req.param('id')
    let result = { alter:false }
    let product = yield Product.find(id)

    if(_lang.isEmpty(product)){
      result['msg'] = 'Não foi possível excluir o produto, item inexistente'
    } else {
      yield product.delete()
      result.alter = true
      result['msg'] = 'Produto removido com sucesso'
    }

    yield resp.send(result)
  }
}

module.exports = ProductController
