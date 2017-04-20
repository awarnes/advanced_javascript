import React, { Component } from 'react';

export default class TotalCount extends Component {

    static propTypes = {
        PRODUCTS: React.PropTypes.object,
    };

    render() {
        return (
            <h6>Total to Purchase: <b>${Math.round(this.props.total)}</b></h6>
        )
    }
}