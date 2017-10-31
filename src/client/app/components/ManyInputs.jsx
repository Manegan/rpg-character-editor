import React from 'react'
import {List} from 'immutable'

class ManyInputs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputs: props.inputs
    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({inputs: newProps.inputs})
  }

  render () {
    let rows = []
    // console.log("Many inputs: ", this.state.inputs)
    if (this.state.inputs) {
      this.state.inputs.forEach(item => {
        if (item.label) {
          rows.push((<span className="input-group-addon">{item.label}</span>))
        }
        let Elem = item.elem || "div"
        rows.push((<Elem className="form-control" name={item.name} type={item.type} />))
        rows.push((<br/>))
      })
    }
    return (<div className="input-group">
      {rows}
    </div>)
  }
}

export default ManyInputs
