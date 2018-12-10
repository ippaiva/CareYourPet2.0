import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddEstablishment from './AddEstablishment'

class EstablishmentList extends Component {
    constructor(props){
        super(props);
        this.state = { 
          listOfEstablishments: []
        };
    }
  
    getAllEstablishments = () =>{
      axios.get(`http://localhost:5000/${this.props.loggedInUser._id}`, {withCredentials:true})
      .then(responseFromEstablishments => {
        this.setState({
          listOfEstablishments: responseFromEstablishments.data
        })
      })
    }
  
    componentDidMount() {
      this.getAllEstablishments();
    }
  
    render(){
      return(
        <div>
          <div style={{width: '60%', float:"left"}}>
            { this.state.listOfEstablishments.map(establishment => {
              return (
                <div key={establishment._id}>
                  <Link to={`/${establishment._id}`}>
                    <h3>{establishment.name}</h3>
                  </Link>
                  <p style={{maxWidth: '400px'}} >{establishment.description} </p>
                </div>
              )})
            }
          </div>
          <div style={{width: '40%', float:"right"}}>
              <AddEstablishment getData={this.getAllEstablishments}/>
          </div>
        </div>
      )
    }
  }

export default EstablishmentList;