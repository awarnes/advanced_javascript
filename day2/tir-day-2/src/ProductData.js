import React, { Component } from 'react';

export default class ProductData extends Component {

    static propTypes = {
        PRODUCTS: React.PropTypes.object,
    }

    render() {
        var name = this.props.product.stocked ? this.props.product.name:
            <span style={{color: 'red'}}>
                {this.props.product.name}
            </span>
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}