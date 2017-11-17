import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { LoginContainer } from '../app/components/Login.jsx'
import TestUtils from 'react-dom/test-utils'
import { expect } from 'chai'
import jQuery from 'jquery'
import LoginService from '../app/services/LoginService'
import rpgApp from '../app/reducers/rpg'
import { createStore } from 'redux'

global.$ = jQuery

const store = createStore(rpgApp)

describe('Home', () => {
  it('should create Home component', function () {
    var component = TestUtils.renderIntoDocument((<Provider store={store}><LoginContainer /></Provider>))

    $("input[name='username']").val("toto")
    $("input[name='password']").val("lol")
    var form = TestUtils.findRenderedDOMComponentWithTag(component, 'form')
    // console.log(TestUtils.Simulate)
    TestUtils.Simulate.submit(form)
    expect(LoginService.getUser()).to.deep.equal({isLoggedIn: false, username: undefined})
    // expect(ReactDOM.findDOMNode(h4).textContent).to.equal('RPG Character editor!')
  })
})
