import React from 'react'
import {List} from 'immutable'

import ManySections from './ManySections.jsx'
import SectionController from './SectionController.jsx'

class CharacterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sections: List()
    }
  }

  addSection(arr) {
    arr.forEach(e => this.state.sections = this.state.sections.push(e))
    console.log("sections form: ", this.state.sections)
  }

  render () {
    return (<div>
      <form>
        <ManySections sections={this.state.sections} />
      </form>
      <SectionController addSection={this.addSection.bind(this)} />
    </div>)
  }
}

export default CharacterForm
