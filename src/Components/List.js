import React, {Component} from 'react'
import Item from './Item'

const listStyle = {
  listStyle: 'none',
  paddingLeft: 0,
}

export default class List extends  Component {
  constructor(props){
    super(props)
  }
  render() {
    const {products, handleRemoveProduct, inStockOnly, filterText} = this.props
    return(
      <div>
        <ul style={listStyle}>
          {
            products.map((product, i) => {
              if (product.description.indexOf(filterText) === -1) {
                return
              }
              if (inStockOnly && !product.stock) {
                return;
              }
              return <Item key={i} product={product} handleRemoveProduct={handleRemoveProduct}/>
            })
          }
        </ul>
      </div>
    )
  }
}