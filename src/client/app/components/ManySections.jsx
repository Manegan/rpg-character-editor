import React from 'react'
import ManyInputs from './ManyInputs.jsx'
import {List} from 'immutable'

class ManySections extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sections: List()
    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({sections: newProps.sections}, () => console.log("new state in manysections: ", this.state))
  }

  render () {
    let rows = []
    console.log("many sections: ", this.state.sections)
    for (let section of this.state.sections) {
      if (section.name) {
        rows.push((<div className="card">
            <div className="card-block">
              <h4 className="card-title">{section.name}</h4>
              <button type="button" className="close pull-right float-right" onClick={e => this.props.deleteSection(e)}>&times;</button>
              <div className="card-body">
                {/* <ManyInputs inputs={section.inputs}/>*/}
              </div>
            </div>
          </div>))
      }
    }
    return (<div>
      {rows}
    </div>)
  }
}

export default ManySections
