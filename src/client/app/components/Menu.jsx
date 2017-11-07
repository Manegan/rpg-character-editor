import React from 'react'
import { Route, Link } from 'react-router-dom'

class Menu extends React.Component {
  render () {
    return (<ul className="nav nav-tabs">
              <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/character">Create character</Link></li>
              <li className="nav-item pull-right"><Link className="nav-link" to="/login">Login</Link></li>
            </ul>)
  }
}

export default Menu
