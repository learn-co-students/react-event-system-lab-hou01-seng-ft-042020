// Code Keypad Component Here
import React, {Component} from 'react'

export default class Keypad extends Component {

  eventHandler(){
    console.log("Entering password...")
  }

  render(){
    return(
      // <input type="password" onKeyUp={() => console.log('Entering password...')} /> 
      <input type="password" onKeyUp={this.eventHandler}></input>
    )
  }
}
