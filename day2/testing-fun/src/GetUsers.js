import React, { Component } from 'react';

export default class GetUsers extends Component {

    static propTypes = {
        numberOfUsers: React.PropTypes.string,
    };

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="How many users?"
                    value={this.props.numberOfUsers}
                    onChange={this.props.handleNumberInput}
                />
                <button
                    type="button"
                    onClick={this.props.handleGetUsers}
                >Get Users!</button>

            </form>
        );
    }
}