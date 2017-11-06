import React from 'react'
import {List} from 'immutable'

import ElemFactory from '../../services/ElementFactory'

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
      this.state.inputs.forEach((item, i) => {
        ElemFactory.createElement(item)
        let currentElem = []
        if (List.isList(item)) return;
        if (item.label) {
          currentElem.push((<span className="input-group-addon">{item.label}</span>))
        }
        let Elem = item.elem || "div"
        currentElem.push((<Elem className="form-control" name={item.name} type={item.type} />))
        currentElem.push((<br/>))
        rows.push((<div className="input-group" key={i}>{currentElem}</div>))
      })
    }
    return (<div>
      {rows}
    </div>)
  }
}

export default ManyInputs
