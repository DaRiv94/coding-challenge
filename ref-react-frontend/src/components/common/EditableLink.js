import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import './EditableLink.css';

export class EditableLink extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modifyingLink: false,
            editedTitle: this.props.link.title,
            link: this.props.link
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }


    onInputChange(e) {
        this.setState({ editedTitle: e.target.value });
    }

    //saves edit when enter is clicked while focused on input
    onKeyPress(e) {
        if (e.key === 'Enter') {
            document.getElementById("EditBtn").click();

        }
    }

    render() {

        const {link} =this.state


        if (!this.state.modifyingLink) {
            return (<>
                <th scope="row"><Link to={"/landing/?link=" + this.state.editedTitle}>{this.state.editedTitle}</Link></th>
                <td>{link.numberOfClicks}</td>
                <td className="pointer edit" onClick={() => { this.setState({ modifyingLink: true }) }}>Edit</td>
                <td className="pointer delete" onClick={() => { this.props.deleteById(link._id) }}>Delete</td>
            </>)
        } else {
            return (<>
                <th className="EditingTh" scope="row" ><input className="EditingLinkInput" type="text" onKeyPress={this.onKeyPress} onChange={this.onInputChange} value={this.state.editedTitle} /></th>
                <td>{link.numberOfClicks}</td>
                <td className="EditingTd edit"><span id="EditBtn" className="pointer btn btn-secondary" onClick={() => { this.setState({ modifyingLink: false }); this.props.editTitleByid(link._id, this.state.editedTitle) }}>Edit</span></td>
                <td className="pointer delete" onClick={() => { this.props.deleteById(link._id) }}>Delete</td>
            </>)

        }

    }
}

EditableLink.propTypes ={
    editTitleByid: PropTypes.func,
    deleteById: PropTypes.func,
    link:PropTypes.object
}

export default EditableLink
