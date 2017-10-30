import React from 'react'
import jQuery from 'jquery'

class SectionController extends React.Component {

  render() {
    return (<div>
      <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#addSectionModal">+</button>

      <div className="modal" id="addSectionModal" role="dialog">
        <div className="dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Add a new section</h4>
            </div>
            <form onSubmit={(e) => {this.props.addSection(e); jQuery('#addSectionModal').modal('hide');}}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="sectionName">Nom</label>
                  <input id="sectionName" type="text" className="form-control" name="name" aria-describedby="nameHelp" placeholder="Nom" />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-default">Ajouter</button>
              </div>
            </form>
          </div>
        </div>²
      </div>
    </div>)
  }
}

export default SectionController
