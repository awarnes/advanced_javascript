import React, { Component } from 'react';

export default class UserProfile extends Component {

    static propTypes = {
        name: React.PropTypes.string,
        cell: React.PropTypes.string,
        large: React.PropTypes.string,
    }


    render() {
        return (
            <section>
                <section>
                    <img src={this.props.large} alt="user here..."/>
                </section>
                <section>
                    <p>Name: {this.props.name}</p>
                    <p>Cell: {this.props.cell}</p>
                </section>
            </section>
        );
    }
}