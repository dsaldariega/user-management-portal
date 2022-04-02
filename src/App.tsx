import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

class App extends React.Component {
  constructor(props:any) {
    super(props)
    this.state = {
      fullName: '',
      username: '',
      email: '',
      password: ''

    }
  }
  render() {
    return (
      <div>
        <Login user={this.state}/>
      </div>
    );
  }
}

export default App;
