import React from 'react'
import LoginForm from './LoginForm.jsx'
import LoginService from '../services/LoginService.js'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = LoginService.getUser()
  }

  loginAction (e) {
    var that = this
    var form = {}
    for (let val of $(e.target).serializeArray()) {
      form[val.name] = val.value
    }
    LoginService.login(form)
    .then(function (resp) {
      console.log(resp)
      that.setState(resp)
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  logoutAction (e) {
    e.preventDefault()
    this.setState({isLoggedIn: false, username: undefined})
    LoginService.logout()
  }

  render() {
    return (<div className="login">
      {this.state.isLoggedIn?
        (<div className="card"><div className="card-block">
          <p className="card-text">Welcome, {this.state.username}!</p><br/>
          <button onClick={this.logoutAction.bind(this)}>Logout</button>
      </div></div>)
      :
        (<LoginForm loginAction={this.loginAction.bind(this)} />)
      }
    </div>)
  }
}

export default Login
