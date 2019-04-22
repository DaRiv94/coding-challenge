import React, { Component } from 'react';
import LinkApi from '../../apis/linksApi';
import queryString from 'query-string';
import './LandingPage.css';

export class LandingPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title:""
    }
  }
  
//When this page is loaded the Query param link is parsed and calls the api to add a click to the link, (assuming it exists)
  componentWillMount(){
    const values = queryString.parse(this.props.location.search);
   
    if(values.link){

      LinkApi.IncreaseClicksByTitle(values.link).then(link=>{
      }).catch(err=>{
        console.log(err);
      });

      this.setState({
        title: `${values.link} are Awesome!`
      });
    }else{
      this.setState({
        title: "No refferal link found..."
      });
    }

    

  }

  render() {
    return (
      <div className="landingDiv">
        <h1 className="title">{this.state.title}</h1>
        <h3>Join Tim's World Wide Web!</h3>
      </div>
    )
  }
}

export default LandingPage

