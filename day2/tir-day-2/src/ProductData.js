import React, { Component } from 'react';

export default class ProductData extends Component {

    static propTypes = {
        PRODUCTS: React.PropTypes.object,
        isBuying: React.PropTypes.object,

    };

    handleOnBuyChange(e){
        let value = e.target.checked;
        let key = this.props.product.name;
        let price = this.props.product.price;
        this.props.onBuyInput(key, value, price);
    }

    render() {
        var name = this.props.product.stocked ? this.props.product.name:
            <span style={{color: 'red'}}>
                {this.props.product.name}
            </span>;

        let amIChecked = this.props.isBuying[this.props.product.name] || false;
        return (
            <tr>
                <td>
                    <input
                        type="checkbox"
                        checked={amIChecked}
                        onChange={this.handleOnBuyChange.bind(this)}
                        />
                    {name}
                </td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}