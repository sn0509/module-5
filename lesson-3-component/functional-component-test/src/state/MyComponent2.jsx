import React, { Component } from 'react'

class MyComponent2 extends Component {
    constructor(){
        super();
        this.state={
            id: 1,
            name: "Tý"
        }
    }
  render() {
    setTimeout(() => {
        this.setState({id: 2, name: "Tèo"});
    },3000);
    const {id,name} = this.state;
    return (
      <>
        <h2>Id : {id}</h2>
        <h2>Name : {name}</h2>
      </>
    )
  }
}

export default MyComponent2