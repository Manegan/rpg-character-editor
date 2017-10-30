import React from 'react'
import {List} from 'immutable'
import jQuery from 'jquery'

import Many from './Many.jsx'
import SectionController from './SectionController.jsx'

class CharacterForm extends React.Component {
  constructor(props) {
    super(props)
    this.sections = List()

  }

  addSection(e) {
    e.preventDefault()
    jQuery(e.target).serializeArray().forEach(e => this.sections=this.sections.add(e))
    console.log(this.state.sections)
  }

  render () {
    return (<div>
      <form>
        <Many sections={this.state.sections} />
      </form>
      <SectionController addSection={this.addSection} />
    </div>)
  }
}

export default CharacterForm
