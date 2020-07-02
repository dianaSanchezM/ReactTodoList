import React from 'react';
import Item from './Item';


export class Items extends React.Component {      
      render() {
        const {todos, handleTypeChange, handleCheckedChange} = this.props;
        return(
          <ul>
          {todos.map(element => <Item item={element} handleCheckedChange={handleCheckedChange}/>)}
          <li>
          <button onClick={() => handleTypeChange("All")}>All</button>
          <button onClick={() => handleTypeChange("Todo")}>To do</button>
          <button onClick={() => handleTypeChange("Done")}>Done</button>
          </li>
          </ul>
        )
        
      }
    }

    export default Items;
