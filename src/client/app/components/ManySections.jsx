import React from 'react'
import ManyInputs from './ManyInputs.jsx'

class ManySections extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let sections, inputs
    let rows = []
    if (sections = this.props.sections) {
      console.log(sections)
      for (let section of sections) {
        if (section.label) {
          rows.push((<div className="card"><div className="card-block">
            <h4 className="card-title">{section.name}</h4>
            <div className="card-body"><ManyInputs inputs={section.inputs}/></div>
          </div></div>))
        }
      }
    }
    return (<div>
      {rows}
    </div>)
  }
}

export default ManySections
