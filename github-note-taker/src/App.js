import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '@big_boy',
            friends: [{'name': 'John', 'level': '5', 'juice': 'apple',},
                      {'name': 'Sam', 'level': '4', 'juice': 'pear',},
                      {'name': 'Dave', 'level': '6', 'juice': 'currant',},
            ],
            newFriendName: "",
            newFriendLevel: "",
            newFriendJuice: "",
        };

    }

    updateNewFriendName(e) {
        this.setState({
            newFriendName: e.target.value,
        });
    }
    updateNewFriendLevel(e) {
        this.setState({
            newFriendLevel: e.target.value,
        });
    }
    updateNewFriendJuice(e) {
        this.setState({
            newFriendJuice: e.target.value,
        });
    }

    addFriend(name, level, juice) {
        let newFriend = [{name: name, level: level, juice: juice}];

        let oldFriends = this.state.friends;

        oldFriends.push.apply(oldFriends, newFriend);

        this.setState({
            friends: oldFriends,
        });
    }

    handleChange (e){
        this.setState({
            username: e.target.value,
        });
    }

    render() {
        return (
            <div>
                Hello {this.state.username}!
                Change Name:
                <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange.bind(this)}
                />

                <FriendsList
                    friends={this.state.friends}
                    addNew={this.addFriend.bind(this)}
                    newFriendName={this.state.newFriendName}
                    newFriendLevel={this.state.newFriendLevel}
                    newFriendJuice={this.state.newFriendJuice}
                    updateNewFriendName={this.updateNewFriendName.bind(this)}
                    updateNewFriendLevel={this.updateNewFriendLevel.bind(this)}
                    updateNewFriendJuice={this.updateNewFriendJuice.bind(this)}
                />
            </div>
        );
    }
}


class FriendsList extends Component {
    constructor (props) {
        super(props);
    }

    handleAddNew() {
        let friendName = this.props.newFriendName;
        let friendLevel = this.props.newFriendLevel;
        let friendJuice = this.props.newFriendJuice

        this.props.addNew(friendName, friendLevel, friendJuice);
    }

    render() {

        let friend_info = [];

        this.props.friends.forEach( (friend) => {
            friend_info.push(friend.name);
            friend_info.push(<p></p>);
            friend_info.push(friend.level);
            friend_info.push(<p></p>);
            friend_info.push(friend.juice);
            friend_info.push(<p></p>);
        });


        return (
          <div>
              <input
                  type="text"
                  value={this.props.newFriendName}
                  id="friendName"
                  onChange={this.props.updateNewFriendName}
              />
              <input
                  type="text"
                  value={this.props.newFriendLevel}
                  id="friendLevel"
                  onChange={this.props.updateNewFriendLevel}
              />
              <input
                  type="text"
                  value={this.props.newFriendJuice}
                  id="friendJuice"
                  onChange={this.props.updateNewFriendJuice}
              />
              <button
                  onClick={this.handleAddNew.bind(this)}
              >
                  Add Friend
              </button>
              {friend_info}
          </div>
        );
    }
}

export default App;
