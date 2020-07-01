import React from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './Items';

class App extends React.Component {
  state = {
    list: [{activity : "Do the laundtry",  active:true},{activity: "Cook dinner", active:false}],
    todo: false,
    newItem : ""
  }
  handleChange = event => {
    this.setState({ newItem: event.target.value });
  };

  handleSubmit = event => {
    this.setState({
      list: this.state.list.push(event.target.value)
    });
  }

  componentDidMount(){
    localStorage.setItem("data", this.state.list);
  }

  componentDidUpdate(prevProps, prevState){

  }

  render() {
    console.log(localStorage.getItem('data'));
    return (
      <div>

      <form  onSubmit={this.handleSubmit}>
      <input type="text" onchange={this.handleChange} placeholder="To do"></input>
        <input className="NewItem-submit button" type="submit" />
        <Items list={this.state.list}/>
      </form>
        
        
      </div>
    );
  }
  
}

export default App;