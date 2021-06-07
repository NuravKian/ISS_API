import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state ={
      issinfo: {},
      date : new Date()
    }
  }
  render(){
    return(
     <div>
        <h1>Where is the ISS right now? </h1>
        <p>At {this.state.date.toLocaleTimeString()}, the ISS is at</p>
        <p> Latitude: {this.state.issinfo?.iss_position?.latitude} Longitude: {this.state.issinfo?.iss_position?.longitude}</p>
        
     </div> 
      
    );
  
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/iss-now.json").then(response => response.json()).then(info => this.setState({issinfo: info}));
    this.timerID = setInterval(() => this.updatePosition(), 1000);
    
  }
    componentWillUnmount(){
    clearInterval(this.timerID);
  }

  updatePosition(){
    fetch("http://api.open-notify.org/iss-now.json").then(response => response.json()).then(info => this.setState({issinfo: info}));
    this.state.date = new Date();
  }

}


export default App;
