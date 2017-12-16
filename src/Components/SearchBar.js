import React, {Component} from 'react'

export default class SearchBar extends Component {
  render () {
    const {handleFilterProductsChange, filterText, handleFilterTextChange} = this.props
    return (
      <div>
        <input placeholder="Search Product" onChange={handleFilterTextChange} value={filterText} type="text"/>
        <br />
        <input type="checkbox" onClick={handleFilterProductsChange}/><span>Show only products with stock</span>
      </div>
    )
  }
}