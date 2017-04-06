import React, { Component } from 'react';
import './App.css';

import SearchBar from './SearchBar.js'
import TableHead from './TableHead.js'

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false,
        };


        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleInStockInput = this.handleInStockInput.bind(this);
    }


    handleFilterTextInput(filterText){
        this.setState({
            filterText: filterText
        });
    }

    handleInStockInput(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        })
    }

    render() {
    return (
      <main>
          <SearchBar
              filterText={this.state.filterText}
              inStockOnly={this.state.inStockOnly}
              onFilterTextInput={this.handleFilterTextInput}
              onInStockInput={this.handleInStockInput}
          />

          <TableHead
              products={PRODUCTS}
              filterText={this.state.filterText}
              inStockOnly={this.state.inStockOnly}
          />
      </main>
    );
  }
}

export default App;
