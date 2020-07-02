import React from "react";
export class Item extends React.Component {
    
      render() {
        const {item, handleCheckedChange} = this.props;
        return (
            <li>
                <input type="checkbox" checked={item.active} id={item.activity} onChange={event => {
              handleCheckedChange(event);
            }} ></input>
                {item.activity}
            </li>
        )
      }
    }

export default Item;