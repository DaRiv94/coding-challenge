import React, { Component } from 'react'
import LinkApi from '../../apis/linksApi';
import EditableLink from '../common/EditableLink';
import './HomePage.css'

export class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      links: [],
      NewLink: "",
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.addLink = this.addLink.bind(this);
    this.deleteById = this.deleteById.bind(this);
    this.editTitleByid = this.editTitleByid.bind(this);
    this.onKeyPress=this.onKeyPress.bind(this);
  }

  //get and display all links
  componentWillMount() {
    LinkApi.GetAllLinks().then(links => {
      //console.log(links);

      this.setState({ links })
    }).catch(err => {
      console.log(err);
    });
  }

  //add new link to database
  async addLink() {

    try{

      await LinkApi.CreateNewLink(this.state.NewLink);

      let links = await LinkApi.GetAllLinks();
      this.setState({ links });
    }catch(err){
      console.log(err);
    }


  }


  onInputChange(e) {
    this.setState({
      NewLink: e.target.value
    });
  }

  //delete link locally and in the database
  async deleteById(id) {

    //Update local link list
    var newLinkList = [];
    var links=this.state.links
    for (var i = 0; i < links.length; i++) {
        if (links[i]._id !== id ) {
          newLinkList.push(links[i]);
        }
    }
    this.setState({
      links: newLinkList
    });

    //delete link in database
    LinkApi.DeleteLinkById(id).then(link=>{
      //console.log(link);
    }).catch(err=>{
      console.log(err);
    });




  }

  //Edit title in database via Id and new Title
  async editTitleByid(id, title){

    //update title in database
    try{
      await LinkApi.EditTitleById(id,title)
    }catch(err){
      console.log(err);
    }

  }

  //saves edit when enter is clicked while focused on input
  onKeyPress(e) {
    if (e.key === 'Enter') {
        document.getElementById("CreateBtn").click();
        this.setState({NewLink: ""})
    }
  }


  render() {

      

    return (
      <div>
        <header>Grow the web with referrals!</header>
        
          <div className="NewLinkDiv">
            <div className="row">
              <label className="col-sm-2 offset-sm-2" >Add a link: </label>
              <input className="col-sm-3 " type="text" onKeyPress={this.onKeyPress}  onChange={this.onInputChange} value={this.state.NewLink} />
              <button id="CreateBtn" className="btn btn-primary col-sm-1" onClick={this.addLink} >ADD</button>
            </div>
            
          </div>
       

        <div className="row">
          <table className="table col-sm-10 offset-sm-1">
            <thead>
              <tr>
                <th scope="col">Link Title</th>
                <th scope="col">Clicks</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.links.map(link => {
                return <tr key={link._id}>
                  <EditableLink link={link} deleteById={this.deleteById} editTitleByid={this.editTitleByid} />
                </tr>
              })}

            </tbody>
          </table>
        </div>

      </div>
    )
  }
}

export default HomePage
