import React, { Component } from 'react';
import './App.css';
// import 'whatwg-fetch';

import GetUsers from "./GetUsers";
import UserList from "./UserList";



class App extends Component {



    constructor(props){
        super(props);
        this.state = {
            numberOfUsers: '',
            userInformation: ['apple', 'john'],
        };

        // const user = [];

    }

    handleNumberInput(e) {
        this.setState({
            numberOfUsers: e.target.value,
        });
    }

    handleGetUsers() {

        let myRequest = new Request('https://randomuser.me/api/?results=1');

        let users = fetch(myRequest).then(response => response.json());


        // let xhttp = new XMLHttpRequest();
        //
        // let users;
        //
        // xhttp.onreadystatechange = function() {
        //     if (this.readyState === 4 && this.status === 200) {
        //         users = this.response;
        //     } else {
        //         users = this.statusText;
        //     }
        // };
        //
        // xhttp.open("GET", 'https://randomuser.me/api/?results=' + this.state.numberOfUsers, false);
        // xhttp.send();

        this.setState({
            userInformation: users,
        });
    }


    render() {
        return (
            <div className="App">
                <GetUsers
                    numberOfUsers={this.state.numberOfUsers}
                    handleNumberInput={this.handleNumberInput.bind(this)}
                    handleGetUsers={this.handleGetUsers.bind(this)}
                />
                <UserList
                    userInfromation={this.state.userInformation}
                />
            </div>
        );
    }
}

export default App;
