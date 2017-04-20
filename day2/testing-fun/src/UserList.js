import React, { Component } from 'react';

import UserProfile from "./UserProfile";

export default class UserList extends Component {

    static propTypes = {
      userInformation: React.PropTypes.array,
    };

    constructor(props){
        super(props);
        const userInformation = [];
    }


    render(userInformation) {

        let users = [];

        // userInformation.forEach((user) => {
        //
        //     let name = user.name.title.toLocaleUpperCase() + ' ' + user.name.first + ' ' + user.name.last;
        //
        //     let picture = user.picture.large;
        //
        //     let cell = user.cell;
        //
        //     users.push(<UserProfile name={name} picture={picture} cell={cell}/>)
        //
        // });


        return (
            <div>
                {this.props.userInformation}
            </div>
        );
    }
}