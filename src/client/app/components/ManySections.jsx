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
    this.setState(newProps)
  }

  render () {
    let rows = []
    // console.log("many sections: ", this.state.sections)
    for (let section of this.state.sections) {
      if (section.name) {
        rows.push((<div className="card section">
            <div className="card-block">
              <input type="hidden" value={section.key} />
              <button type="button" className="close pull-right" onClick={e => this.props.deleteSection(e)}>&times;</button>
              <h4 className="card-title">{section.name}</h4>
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
