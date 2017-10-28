import React from 'react'

class Many extends React.Component {
  render () {
    let items = this.props.items
    console.log(items)
    let rows = []
    for (let item of items) {
      if (item.label) {
        rows.push((<span className="input-group-addon">{item.label}</span>))
      }
      let Elem = item.elem
      rows.push((<Elem className="form-control" name={item.name} type={item.type} />))
      rows.push((<br/>))
    }
    return (<div className="input-group">
      {rows}
    </div>)
  }
}

export default Many
