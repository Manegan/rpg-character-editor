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
    this.setState({sections: this.state.sections.push(arr)}, () => console.log(this.state.sections))
  }

  deleteSection (e) {
    let toDelete = $(e.target).parent().find("input").val()
    let index = this.state.sections.indexOf(this.state.sections.find(e => e.key === toDelete))
    this.setState({sections: this.state.sections.remove(index)})
  }

  render () {
    return (<div>
      <form>
        <ManySections sections={this.state.sections} deleteSection={this.deleteSection.bind(this)} />
      </form>
      <SectionController addSection={this.addSection.bind(this)} />
    </div>)
  }
}

export default CharacterForm
