import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './Menu.jsx'
import Home from './Home.jsx'
import Character from './Character.jsx'
import Component2 from './Component2.jsx'

class App extends React.Component {
  render () {
    return (<Router>
              <div className="container-fluid">
                <Menu /> <br/>
                <Route exact path="/" component={Home} />
                <Route path="/character" component={Character} />
                <Route path="/bla2" component={Component2} />
              </div>
            </Router>)
  }
}

render(<App/>, document.getElementById('app'))
