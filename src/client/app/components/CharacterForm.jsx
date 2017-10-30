import React from 'react'
import {List} from 'immutable'
import jQuery from 'jquery'

import Many from './Many.jsx'
import SectionController from './SectionController.jsx'

class CharacterForm extends React.Component {
  constructor(props) {
    super(props)
    this.sections = List()
    this.inputs = List()
  }

  addSection(section) {
    console.log(jQuery(e.target).seriaizeArray())
  }

  render () {
    return (<div>
      <form>
        <Many items={this.inputs} />
      </form>
      <SectionController addSection={this.addSection} />
    </div>)
  }
}

export default CharacterForm
