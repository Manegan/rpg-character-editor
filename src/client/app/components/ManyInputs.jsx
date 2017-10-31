import React from 'react'
import {List} from 'immutable'

class ManyInputs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputs: List()
    }
  }

  componentDidMount () {
    this.setState({inputs: this.props.inputs})
  }

  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps: ", newProps)
    this.setState({inputs: newProps})
  }

  render () {
    let rows = []
    console.log("Many inputs: ", this.state.inputs)
    for (let item of this.state.inputs) {
      if (item.label) {
        rows.push((<span className="input-group-addon">{item.label}</span>))
      }
      let Elem = item.elem || "div"
      rows.push((<Elem className="form-control" name={item.name} type={item.type} />))
      rows.push((<br/>))
    }
    return (<div className="input-group">
      {rows}
    </div>)
  }
}

export default ManyInputs
