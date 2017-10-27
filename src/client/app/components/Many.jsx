import React from 'react'

class Many extends React.Component {
  render () {
    let items = this.props.items
    console.log(items)
    let rows = []
    for (let item of items) {
      if (item.label) {
        rows.push((<label for={item.name}>{item.label}</label>))
      }
      rows.push((<input name={item.name} type={item.type} />))
      rows.push((<br/>))
    }
    return (<div>
      {rows}
    </div>)
  }
}

export default Many
