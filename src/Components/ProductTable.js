import React, {Component} from 'react'
import List from './List'
import SearchBar from './SearchBar'

export default class ProductTable extends Component {
  constructor() {
    super()
    this.state = {
      products,
      filterText: '',
      inStockOnly: false,
      newProduct: {description: ''},
    }
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this)
    this.handleFilterProductsChange = this.handleFilterProductsChange.bind(this)
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleNewProductTextChange = this.handleNewProductTextChange.bind(this)
    this.handleAddProduct = this.handleAddProduct.bind(this)
  }
  handleRemoveProduct(productID) {
    const {products} = this.state
    const productWithNoStock = products.find(item => item.id === productID)
    const idx = products.indexOf(productWithNoStock)

    productWithNoStock.stock = false

    this.setState({
      products: [
        ...this.state.products.slice(0, idx),
        productWithNoStock,
        ...this.state.products.slice(idx + 1)
      ]
    })
  }
  handleFilterProductsChange() {
    const {inStockOnly} = this.state
    this.setState({inStockOnly: !inStockOnly})
  }
  handleFilterTextChange(e) {
    const filterText = e.target.value
    this.setState({filterText})
  }
  handleNewProductTextChange(e) {
    const newProduct = {}
    newProduct.description = e.target.value
    this.setState({newProduct})
  }
  handleAddProduct(){
    const {products, newProduct} = this.state
    newProduct.id = products[products.length -1].id + 1
    newProduct.stock = true
    this.setState({products: [...products, newProduct]})
  }
  render () {
    const {products, filterText, inStockOnly, newProduct} = this.state
    return (
      <div>
        <h3>Products</h3>
        <input type="text" value={newProduct.description} onChange={this.handleNewProductTextChange}/>
        <button onClick={this.handleAddProduct}>Add Product</button>
        <br />
        <br />
        <SearchBar
          filterText={filterText}
          handleFilterProductsChange={this.handleFilterProductsChange}
          handleFilterTextChange={this.handleFilterTextChange}/>
        <List products={products}
              handleRemoveProduct={this.handleRemoveProduct}
              inStockOnly={inStockOnly}
              filterText={filterText}/>
      </div>
    )
  }
}

const products = [
  {id:1, description: 'fernet', price: '$180', stock: true},
  {id:2, description: 'coca-cola', price: '$56', stock: true},
  {id:3, description: 'papas', price: '$46', stock: true},
  {id:4, description: 'mani', price: '$26', stock: true},
  {id:5, description: 'salame', price: '$50', stock: true},
  {id:6, description: 'queso', price: '$80', stock: true},
  {id:7, description: 'cerveza', price: '$70', stock: false},
]