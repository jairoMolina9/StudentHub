import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import logo from './logo.svg';
import User from './User.js';
import Card from './Card'
import './App.css';
import axios from 'axios';
import faker from 'faker';

var dontEverDoThisInProduction = []


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Meet Up",
      users: []
    }
  }

  componentDidMount() {
    let tmpUsers = [];

    axios.get(`http://localhost:3005/users`)
    .then(res => {
      const people = res.data
      this.setState({ users: people });
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"
          onclick = {() => this.setstate(
            {
              name: this.setstate.name + '!'
            }
          )} />
          <h1 className="App-title">{this.state.name}</h1>
        </header>
        {
          //usersClasses.map(function(user){...})
          this.state.users.map((user,i) => (
            <Card user={user} id={i}/>
              // <User key={`user`} name = {user.name} age = {user.age} major ={user.major} id={i}/>
          ))

        }

		<Button onClick = {() => this.setState({
			name: this.state.name + '!'
		})}> Click </Button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;