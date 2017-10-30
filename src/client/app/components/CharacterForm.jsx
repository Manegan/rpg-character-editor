import React from 'react'
import {List} from 'immutable'

import ManySections from './ManySections.jsx'
import SectionController from './SectionController.jsx'

class CharacterForm extends React.Component {
  constructor(props) {
    super(props)
    this.sections = List()
  }

  addSection(e) {
    console.log(this)
    e.preventDefault()
    $(e.target).serializeArray().forEach(e => this.sections=this.sections.push(e))
    console.log(this.sections)
  }

  render () {
    return (<div>
      <form>
        <ManySections sections={this.sections} />
      </form>
      <SectionController addSection={this.addSection.bind(this)} />
    </div>)
  }
}

export default CharacterForm
