import React from 'react'

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
            <div className="modal-body">
              <p>Something</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>*
      </div>
    </div>)
  }
}

export default SectionController
