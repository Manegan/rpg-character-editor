import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../app/components/Home.jsx'
import TestUtils from 'react-dom/test-utils'
import {expect} from 'chai'

describe('Home', () => {
  it('should create Home component', function () {
    var component = TestUtils.renderIntoDocument((<Home />))

    var h4 = TestUtils.findRenderedDOMComponentWithTag(component, 'h4')
    expect(ReactDOM.findDOMNode(h4).textContent).to.equal('RPG Character editor!')
    // expect(true).to.be.true
    
  })
})
