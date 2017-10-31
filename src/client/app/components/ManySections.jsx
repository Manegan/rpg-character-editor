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

  componentDidMount () {
    this.setState({sections: List(this.props.sections)})
  }

  componentWillReceiveProps (newProps) {
    this.setState({sections: List(newProps)})
  }

  render () {
    let rows = []
    console.log("many sections: ", this.state.sections)
    for (let section of this.state.sections) {
      if (section.label) {
        rows.push((<div className="card">
            <div className="card-block">
              <h4 className="card-title">{section.name}</h4>
              <div className="card-body">
                <ManyInputs inputs={section.inputs}/>
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
