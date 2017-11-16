'use strict'

const Product = use('App/Model/Product')
const Validator = use('Validator')
const Helpers = use('Helpers')
const _lang = use('lodash/lang')
const fs = use('fs')

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
    const validation = yield Validator.validate(req.only('nome','categoria','descricao','valor'), Product.rules)
    const img = req.file('img', { maxSize: '2mb', allowedExtensions: [ 'jpg', 'jpeg', 'png', 'gif'] })
    let product = null
    let result = {alter:false}

    if( validation.fails() ){
      result['msg'] = 'Não foi possivel adicionar o novo produto, verificar os dados'
      result['err'] = validation.messages()
    } else {
      product = new Product( req.all() )
      yield product.save()
      yield img.move(Helpers.publicPath('uploads'), `${product._id}.${img.extension()}`)
      product.img = `\/uploads\/${img.uploadName()}`
      yield product.save()
      result.alter = true
      result['msg'] = 'Produto criado com sucesso'
    }

    yield resp.send(result)
  }
 
  * update (req, resp) {
    const newProduct = req.only('nome','categoria','descricao','valor')
    const img = req.file('img', {
      maxSize: '2mb',
      allowedExtensions: [ 'jpg', 'jpeg', 'png', 'gif']
    })
    let fileName = ''
    let product = yield Product.find(req.param('id'))
    let validation = yield Validator.validate(newProduct, Product.rules)

    if (validation.fails()) {
      resp.internalServerError({
        errors: 'Não foi possivel alterar o produto, verificar os dados',
        msg: validation.messages()
      })
    } else {
      if (img) {
        fileName = `${req.param('id')}.${img.extension()}`
        yield img.move(Helpers.publicPath('uploads'), fileName)

        if (!img.moved()) {
          if (img.exists()) {
            fs.unlinkSync(`${Helpers.publicPath('uploads')}\/${fileName}`)
            yield img.move(Helpers.publicPath('uploads'), fileName)
          }
        }
        product.img = `\/uploads\/${img.uploadName()}`
      }

      for(let p in newProduct){
        product[p] = newProduct[p]
      }
      yield product.save()
      resp.ok({
        msg:'Produto alterado com sucesso',
        produto: product
      })
    }
  }

  // Metodo que remove um produto
  * destroy (req, resp) {
    let id = req.param('id')
    let result = { alter:false }
    let product = yield Product.find(id)

    if (_lang.isEmpty(product)) {
      result['msg'] = 'Não foi possível excluir o produto, item inexistente'
    } else {
      if (fs.existsSync(Helpers.publicPath() + product.img)) {
        fs.unlinkSync(Helpers.publicPath() + product.img)  
      }
      yield product.delete()
      result.alter = true
      result['msg'] = 'Produto removido com sucesso'
    }

    yield resp.send(result)
  }
}

module.exports = ProductController
