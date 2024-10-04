import React from 'react'
import joystick_red from "../Assets/joystick_red.png"
import "./Bill_item.css"


function Bill_item() {
  return (
    <div><div className="bill_items">
    <div className="item">
    <img src={joystick_red}/><span>LCD Monitor</span>
    </div>
    <div className="price"><h3>$650</h3>
    </div>
    </div></div>
    
  )
}

export default Bill_item