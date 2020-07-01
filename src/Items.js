import React, { Component } from "react";
import Item from './Item';
export class Items extends React.Component {
    state = {
        list: [],
        todo: false
    }

    handleButtonChange = e => {
          this.setState({ todo: !this.state.todo},
              console.log("todo", this.state.todo));
          
      };
      render() {
        console.log(this.props.list);

        return(
            <>
            <ul className="suggestions">
            {this.props.list.filter(element => element.active !== this.state.todo )
            .map( element => <Item item= {element}/>)}
            </ul>
            </>
        )
        
      }
    }
    export default Items;
