import React, { Component } from 'react'
import "./Edit.css"

export class Edit extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         NewTitle:this.props.title
      }
      this.onInputChange = this.onInputChange.bind(this);
      this.EditTitle = this.EditTitle.bind(this);
    }

    onInputChange(e) {
        this.setState({
            NewTitle: e.target.value
        });
      }

    EditTitle(title) {
        console.log("Edit by title:", this.state.NewTitle);
      }
    
  render() {
    return (
      <div>
        
          <div className="EditInput">
            <label>Edit a link: </label>
            <input type="text" onChange={this.onInputChange} value={this.state.NewTitle} />
            <button className="btn btn-primary" onClick={this.addLink} >Edit</button>
          </div>
        
      </div>
    )
  }
}

export default Edit
