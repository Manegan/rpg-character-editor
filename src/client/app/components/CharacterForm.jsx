import React from 'react'
import {List} from 'immutable'

import Many from './Many.jsx'

class CharacterForm extends React.Component {
  constructor(props) {
    super(props)
    this.sections = List([{
        name: "General"
      }
    ])
    this.inputs = List([{
        name: "name",
        type: "text",
        label: "Nom"
      }
    ])
  }

  render () {
    return (<form>
      <Many items={this.inputs} />
      {/*<AddSection />

        code under creates a components of type + "Component", We can then use
        something like type = "input"...
        var MyComponent = Components[type + "Component"]
        return <MyComponent />
        */}
    </form>)
  }
}

export default CharacterForm
