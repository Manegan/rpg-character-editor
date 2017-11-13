var _elemMap = {
  select (props) {
    let values = []
    for (var value of props.values) {
      values.push((<option key={value} value={value}>{value}</option>))
    }
    return (<select name={props.name}>{values}</select>)
  },
  input (props) {
    return (<div></div>)
  }
}

export default {
  createElement (properties) {
    console.log(properties)
    return _elemMap[properties.type] || "Error"
  }
}
