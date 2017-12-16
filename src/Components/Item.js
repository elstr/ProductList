import React, {Component} from 'react'

export default class Item extends Component {
  constructor(props){
    super(props)
    this.removeProduct = this.removeProduct.bind(this)
  }
  removeProduct() {
    const {handleRemoveProduct, product} = this.props
    handleRemoveProduct(product.id);
  }
  render() {
    const {description, price, stock} = this.props.product
    return (
      <li style={{color: stock ? 'green' : 'red'}}>
        <input type="checkBox" onClick={this.removeProduct}/>
        {description} {price}
      </li>
    )
  }
}

