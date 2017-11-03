import React from 'react'
import {List} from 'immutable'
import ManyInputs from './ManyInputs.jsx'

class SectionController extends React.Component {
  constructor (props) {
    super(props)
    this.currentKey = 0
    this.state = {
      inputs: List([{
        elem: "input",
        label: "Nom",
        name: "name",
        type: "text",
        sectionInputs: List()
      }])
    }
  }

  addSectionEvent (e) {
    e.preventDefault()
    let formArray = $(e.target).serializeArray()
    let formObject = {key: this.currentKey}
    this.currentKey ++
    for (let i in formArray) {
      formObject[formArray[i]["name"]] = formArray[i]["value"]
    }
    this.props.addSection(formObject)
    $('#addSectionModal').modal('hide')
  }

  render() {
    return (<div>
      <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#addSectionModal">+</button>

      <div className="modal" id="addSectionModal" role="dialog">
        <div className="dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add a new section</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <form onSubmit={this.addSectionEvent.bind(this)}>
              <div className="modal-body">
                <ManyInputs inputs={this.state.inputs} />
                <fieldset name="inputs">
                  <ManyInputs inputs={this.state.inputs.sectionInputs} />
                </fieldset>
              </div>
              <div className="modal-footer">
                <button className="btn btn-default">Ajouter</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default SectionController
