import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../app/components/Login.jsx'
import TestUtils from 'react-dom/test-utils'
import { expect } from 'chai'
import jQuery from 'jquery'
import LoginService from '../app/services/LoginService'

global.$ = jQuery

describe('Home', () => {
  it('should create Home component', function () {
    var component = TestUtils.renderIntoDocument((<Login />))

    $("input[name='username']").val("toto")
    $("input[name='password']").val("lol")
    var form = TestUtils.findRenderedDOMComponentWithTag(component, 'form')
    // console.log(TestUtils.Simulate)
    TestUtils.Simulate.submit(form)
    expect(LoginService.getUser()).to.deep.equal({isLoggedIn: false, username: undefined})
    // expect(ReactDOM.findDOMNode(h4).textContent).to.equal('RPG Character editor!')
  })
})
