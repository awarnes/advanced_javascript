import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const SERVER_DATA =

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <ProductLine catalog={SERVER_DATA}/>
      </div>
    );
  }
}

class SearchBar extends Component {
    render() {
        return (
            <input type='text' placeholder='Search...'><br>
            <input type='checkbox' unchecked> Search only in stock
        )
    }
}

class ProductLine extends Component {
    statuc propTypes = {
        catalog: React.PropTypes.array,
    }

    render() {
        return(
            <div>
            <ProductHeadline/>
            <ProductData catalog={this.props.catalog}/>
            </div>
        )
    }
}

class ProductHeadline extends Component {
    render() {
        <div>
            <p></p>
            <p></p>
        </div>
    }
}

class ProductData extends Component {
    static propTypes = {
        catalog = React.PropTypes.array,
    }

    render() {

    }
}

export default App;
