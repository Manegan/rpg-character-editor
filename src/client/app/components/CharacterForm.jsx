import React from 'react'
import {List} from 'immutable'

import Many from './Many.jsx'
import SectionController from './SectionController.jsx'

class CharacterForm extends React.Component {
  constructor(props) {
    super(props)
    this.sections = List([{
        name: "General"
      }
    ])
    this.inputs = List([{
        name: "name",
        type: "text",
        label: "Name",
        elem: "input"
      }
    ])
  }

  addInput() {

  }

  render () {
    return (<form>
      <Many items={this.inputs} />
      <SectionController clickEvent={this.addInput.bind(this)} />
    </form>)
  }
}

export default CharacterForm
