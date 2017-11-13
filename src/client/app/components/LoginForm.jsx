import React from 'react'

class LoginForm extends React.Component {
  render () {
    return (<form onSubmit={e => {e.preventDefault();this.props.loginAction(e);}}>
      <div className="form-group">
        <input className="form-control" name="username" type="text" placeholder="Username" />
        <input className="form-control" name="password" type="password" placeholder="Password" />
        <button className="btn btn-default" type="submit">Login</button>
      </div>
    </form>)
  }
}

export default LoginForm
