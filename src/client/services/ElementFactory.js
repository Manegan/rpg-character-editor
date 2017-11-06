export default {
  _elemMap: {
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
  },

  createElement (properties) {
    return this._elemMap[properties.type](properties) || "Error"
  }
}
