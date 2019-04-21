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
  

  componentWillMount(){
    const values = queryString.parse(this.props.location.search);
   
    if(values.link){

      LinkApi.IncreaseClicksByTitle(values.link).then(link=>{
        //console.log(link);
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

