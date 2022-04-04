import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

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

  handleChangeFullName(e:any){
    this.setState({
      fullName:e.target.value
    })
  }
  handleChangeUsername(e:any){
    this.setState({
      username:e.target.value
    })
  }
  handleChangeEmail(e:any){
    this.setState({
      email:e.target.value
    })
  }
  handleChangePassword(e:any){
    this.setState({
      password:e.target.value
    })
  }



  render() {
    return (
      <div>
        <Login user={this.state}/>
        <Register user={this.state} handleChange={[this.handleChangeFullName, this.handleChangeUsername, this.handleChangeEmail, this.handleChangePassword]}/>
      </div>
    );
  }
}

export default App;
