import React from 'react'
import LoginForm from './LoginForm.jsx'
import LoginService from '../../services/LoginService.js'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }

  loginAction (e) {
    var form = {}
    for (let val of $(e.target).serializeArray()) {
      form[val.name] = val.value
    }
    LoginService.login(form)
  }

  render() {
    return (<div className="login">
      {this.state.isLoggedIn?
        (<p>Welcome, {this.state.username}!</p>)
      :
        (<LoginForm loginAction={this.loginAction.bind(this)} />)
      }
    </div>)
  }
}

export default Login
