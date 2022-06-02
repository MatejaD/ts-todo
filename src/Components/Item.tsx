import React from "react";
import {IItem} from '../App'

interface Props{
    item: IItem;
    removeItem(id:number):void
}

export default function Item({item,removeItem}:Props,) {

   

  return (<div className="w-full h-16 flex justify-between items-center border-2 px-2 text-2xl border-white">
      <div className="w-1/2 h-full flex justify-start items-center">
          {item.name}
      </div>
      <div className="w-1/6 h-full flex justify-evenly items-center text-lg">
    <button onClick={() => removeItem(item.id)}>X</button>
    <button>Edit</button>

      </div>
  </div>);
}
