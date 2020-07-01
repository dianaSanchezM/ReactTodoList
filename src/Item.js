import React, { Component } from "react";
class Item extends React.Component {
    state = {
       active: false
    }

    handleChange = e => {
        
        this.setState({ active: !this.state.active},
        ()=>{
            console.log(this.state.active);
        });
        this.handleChange();
    };
      render() {
        const {item, handleChange} = this.props
        return (
            <li>
                <input type="checkbox" defaultChecked={this.state.active} id="myCheck" onclick={handleChange}></input>
                {item.activity}
            </li>
        )
      }
    }

export default Item;