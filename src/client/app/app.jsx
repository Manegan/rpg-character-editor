import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './components/Menu.jsx'
import Home from './components/Home.jsx'
import Character from './components/Character.jsx'

class App extends React.Component {
  render () {
    return (<Router>
              <div className="container-fluid">
                <Menu /> <br/>
                <Route exact path="/" component={Home} />
                <Route path="/character" component={Character} />
                <Route path="/login" component={Login} />
              </div>
            </Router>)
  }
}

render(<App/>, document.getElementById('app'))
