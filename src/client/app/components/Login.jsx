import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm.jsx'
import LoginService from '../services/LoginService.js'
import userActions from '../actions/userActions'

class Login extends React.Component {
  constructor (props) {
    super(props)
  }

  static mapStateToProps (state) {
    return {
      isLoggedIn: state.isLoggedIn,
      username: state.username
    }
  }

  static mapDispatchToProps (dispatch) {
    return {
      loginUser: (user) => dispatch({
        type: 'USER_LOGIN',
        user
      }),
      logoutUser: () => dispatch({
        type: 'USER_LOGOUT'
      })
    }
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
      that.props.loginUser(resp)
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  logoutAction (e) {
    e.preventDefault()
    this.props.logoutUser()
    LoginService.logout()
  }

  render() {
    return (<div className="login">
      {this.props.isLoggedIn?
        (<div className="card"><div className="card-block">
          <p className="card-text">Welcome, {this.props.username}!</p><br/>
          <button onClick={this.logoutAction.bind(this)}>Logout</button>
      </div></div>)
      :
        (<LoginForm loginAction={this.loginAction.bind(this)} />)
      }
    </div>)
  }
}

export const LoginContainer = connect(Login.mapStateToProps, Login.mapDispatchToProps, userActions)(Login)
