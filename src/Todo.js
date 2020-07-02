import React from 'react';
import './App.css';
import Items from './Items';

class Todo extends React.Component {
  state = {
    list: [{'activity' : 'Do the laundry',  'active':true},{'activity': 'Cook dinner', 'active':false}],
    listType : "All",
    newItem : ""
  }
  handleInputChange = event => {

    this.setState({ newItem: event.target.value });
  };

  handleInputSubmit = event => {
    event.preventDefault();
    const data = [{ 'activity':this.state.newItem, 'active': false}];
    this.setState({
      list:[...this.state.list, ...data], 
      newItem:""
    });
  }

  handleTypeChange = (type) =>{
    this.setState({
      listType: type
    })
  }

  handleCheckedChange = event =>{
    
    const {id} = event.target;
    const filteredData = this.state.list.filter(element => element.activity === id);
    filteredData[0].active = event.target.checked;
    const noFilteredList = this.state.list.filter(element => element.activity !== id);
    this.setState({
      list:[filteredData[0], ...noFilteredList]
    });
  }
  
  componentDidMount(){
    localStorage.getItem('data')? this.setState({list : JSON.parse(localStorage.getItem('data'))}):localStorage.setItem('data', JSON.stringify(this.state.list));
  }

  componentDidUpdate(prevProps, prevState){
    localStorage.setItem('data',JSON.stringify(this.state.list));
  }

  render() {
    const listToRender = (this.state.listType!=="All")?this.state.list.filter(element => (this.state.listType==="Todo" && element.active===false)||(this.state.listType==="Done" && element.active===true)): this.state.list;
    return (
      <div>
      <form  onSubmit={this.handleInputSubmit}>
        <input type="text" onChange={this.handleInputChange} placeholder="To do" value={this.state.newItem}></input>
        <input type="submit" />
        
      </form>
      <Items todos={listToRender} handleTypeChange={this.handleTypeChange} handleCheckedChange={this.handleCheckedChange}/>
        
      </div>
    );
  }
  
}

export default Todo;