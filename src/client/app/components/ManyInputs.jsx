import React from 'react'

class ManyInputs extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let sections, inputs
    let rows = []
    if (inputs = this.props.inputs) {
      console.log(inputs)
      for (let item of inputs) {
        if (item.label) {
          rows.push((<span className="input-group-addon">{item.label}</span>))
        }
        let Elem = item.elem || "div"
        rows.push((<Elem className="form-control" name={item.name} type={item.type} />))
        rows.push((<br/>))
      }
    }
    return (<div className="input-group">
      {rows}
    </div>)
  }
}

export default ManyInputs
